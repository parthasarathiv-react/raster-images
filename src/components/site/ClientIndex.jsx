import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import './client-index.css';

/*
 * ClientIndex
 * The client list as an editorial index rather than a grid of cards: one row
 * per institution (name + location), with the hovered client's logo floating
 * near the cursor on a spring. Logos are supplied for light backgrounds, so the
 * preview is a white card.
 *
 * Touch/coarse-pointer devices never fire hover, so there the floating preview
 * is dropped and each row shows its logo inline instead (see the CSS).
 *
 * items: [{ name, city, img }]
 */
const ClientIndex = ({ items = [] }) => {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const shown = active !== null;

  return (
    <div
      className="cl-index"
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={() => setActive(null)}
    >
      {/* floating logo preview — follows the cursor, hidden on coarse pointers */}
      <motion.div
        className="cl-index__preview"
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.85 }}
        transition={{ duration: reduce ? 0 : 0.28, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {active !== null && (
          <motion.img
            key={items[active].img}
            src={items[active].img}
            alt=""
            initial={reduce ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </motion.div>

      <ul className="cl-index__list">
        {items.map((c, i) => (
          <motion.li
            className="cl-row"
            key={`${c.name}-${c.city}`}
            onPointerEnter={() => setActive(i)}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -6% 0px' }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="cl-row__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="cl-row__logo">
              <img src={c.img} alt="" loading="lazy" />
            </span>
            <span className="cl-row__name">{c.name}</span>
            <span className="cl-row__city">{c.city}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ClientIndex;
