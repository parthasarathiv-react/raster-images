import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import './AnimatedList.css';

/*
 * AnimatedList (React Bits, adapted)
 * Each row eases in when scrolled into view; hover highlights the active row,
 * and top/bottom fade gradients hint that the list scrolls. Keyboard arrows
 * move the selection. `items` is a string[] (or the classic demo default).
 */

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      style={{ marginBottom: '0.6rem', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < items.length) {
        e.preventDefault();
        onItemSelect?.(items[selectedIndex], selectedIndex);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedEl = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedEl) {
      const extra = 50;
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;
      const iTop = selectedEl.offsetTop;
      const iBottom = iTop + selectedEl.offsetHeight;
      if (iTop < cTop + extra) container.scrollTo({ top: iTop - extra, behavior: 'smooth' });
      else if (iBottom > cBottom - extra) container.scrollTo({ top: iBottom - container.clientHeight + extra, behavior: 'smooth' });
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`animated-list ${className}`.trim()}>
      <div
        ref={listRef}
        className={`animated-list__scroll ${displayScrollbar ? '' : 'no-scrollbar'}`}
        onScroll={handleScroll}
        data-lenis-prevent
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            index={index}
            delay={0.08 + (index % 8) * 0.03}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => { setSelectedIndex(index); onItemSelect?.(item, index); }}
          >
            <div className={`animated-list__item ${selectedIndex === index ? 'selected' : ''} ${itemClassName}`.trim()}>
              <span className="animated-list__bullet" />
              <span className="animated-list__text">{item}</span>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div className="animated-list__grad animated-list__grad--top" style={{ opacity: topGradientOpacity }} />
          <div className="animated-list__grad animated-list__grad--bottom" style={{ opacity: bottomGradientOpacity }} />
        </>
      )}
    </div>
  );
};

export default AnimatedList;
