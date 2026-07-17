import React, { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

/*
 * ScrollStack (React Bits, adapted)
 * Two modes:
 *   - default: an inner scroll container (scroll happens inside the box)
 *   - useWindowScroll: driven by the PAGE scroll, so the cards stack as the
 *     visitor scrolls the document normally (no need to hover the box).
 * Positions are measured from layout (offsetTop), which transforms don't
 * affect, so per-frame reads stay correct. Wrap each card in <ScrollStackItem>.
 */

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 90,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const innerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardTopsRef = useRef([]);
  const endTopRef = useRef(0);
  const lastTransformsRef = useRef(new Map());
  const stackCompletedRef = useRef(false);
  const tickingRef = useRef(false);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  // Cache each card's document/scroller-relative top from layout (unaffected by
  // the transforms we apply), so we never read a transformed rect back.
  const measure = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const innerTop = useWindowScroll ? inner.getBoundingClientRect().top + window.scrollY : 0;
    cardTopsRef.current = cardsRef.current.map((c) =>
      useWindowScroll ? innerTop + c.offsetTop : c.offsetTop
    );
    const endEl = inner.querySelector('.scroll-stack-end');
    endTopRef.current = endEl ? (useWindowScroll ? innerTop + endEl.offsetTop : endEl.offsetTop) : 0;
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop || 0;
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current?.clientHeight || 0;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endTopRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = cardTopsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jTriggerStart = cardTopsRef.current[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const next = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - next.translateY) > 0.1 ||
        Math.abs(last.scale - next.scale) > 0.001 ||
        Math.abs(last.rotation - next.rotation) > 0.1 ||
        Math.abs(last.blur - next.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0, ${next.translateY}px, 0) scale(${next.scale}) rotate(${next.rotation}deg)`;
        card.style.filter = next.blur > 0 ? `blur(${next.blur}px)` : '';
        lastTransformsRef.current.set(i, next);
      }

      if (i === cardsRef.current.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    baseScale, blurAmount, calculateProgress, itemScale, itemStackDistance, onStackComplete,
    parsePercentage, rotationAmount, scaleEndPosition, stackPosition, useWindowScroll,
  ]);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      updateCardTransforms();
      tickingRef.current = false;
    });
  }, [updateCardTransforms]);

  const handleResize = useCallback(() => {
    measure();
    updateCardTransforms();
  }, [measure, updateCardTransforms]);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return undefined;

    cardsRef.current = Array.from(inner.querySelectorAll('.scroll-stack-card'));
    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) card.style.marginBottom = `${itemDistance}px`;
      // Only promise `filter` when a blur is actually configured — declaring it
      // unconditionally forces every card onto its own layer with a filter
      // pipeline it never uses.
      card.style.willChange = blurAmount ? 'transform, filter' : 'transform';
    });

    measure();
    updateCardTransforms();

    const scrollTarget = useWindowScroll ? window : scrollerRef.current;
    scrollTarget?.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    // fonts/images can shift layout after mount — re-measure shortly after
    const t = setTimeout(handleResize, 300);
    return () => {
      scrollTarget?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(t);
      lastTransformsRef.current.clear();
    };
  }, [blurAmount, handleResize, handleScroll, itemDistance, measure, updateCardTransforms, useWindowScroll]);

  const scrollerClass = `scroll-stack-scroller${useWindowScroll ? ' scroll-stack-scroller--window' : ''} ${className}`.trim();

  return (
    <div className={scrollerClass} ref={scrollerRef}>
      <div className="scroll-stack-inner" ref={innerRef}>
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
