import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import './scroll-timeline.css';

/*
 * ScrollTimeline
 * Vertical timeline whose accent rail fills as the section scrolls through the
 * viewport. Each entry's year sticks alongside its own copy (CSS position:
 * sticky inside the grid row), so the year stays pinned while its story scrolls
 * past, then hands off to the next one. Dots light up as they enter view.
 *
 * items: [{ year, title, body }]
 */
const ScrollTimeline = ({ items = [] }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // Progress across the rail: starts filling when the timeline's top reaches
  // 60% down the viewport, completes when its end passes the middle.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 55%'],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <div className="tl" ref={ref}>
      <div className="tl__rail" aria-hidden="true">
        <motion.div
          className="tl__rail-fill"
          style={{ scaleY: reduce ? 1 : fill }}
        />
      </div>

      {items.map((item, i) => (
        <article className="tl__item" key={`${item.year}-${item.title}`}>
          <motion.span
            className="tl__dot"
            aria-hidden="true"
            initial={reduce ? false : { scale: 0.3, opacity: 0.25 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -45% 0px' }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          />

          <div className="tl__year">
            <span>{item.year}</span>
          </div>

          <motion.div
            className="tl__content"
            initial={reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.75, delay: i * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <h5 className="tl__title">{item.title}</h5>
            <p className="tl__body">{item.body}</p>
          </motion.div>
        </article>
      ))}
    </div>
  );
};

export default ScrollTimeline;
