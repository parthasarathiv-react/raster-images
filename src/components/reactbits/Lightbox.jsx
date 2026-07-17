import React, { useEffect } from 'react';
import './Lightbox.css';

/*
 * Lightbox — click a thumbnail to open the image full-size over a dimmed
 * backdrop. Closes on backdrop click, the × button, or the Escape key.
 */
const Lightbox = ({ src, alt = '', onClose }) => {
  useEffect(() => {
    if (!src) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="rb-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="rb-lightbox__close" aria-label="Close" onClick={onClose}>×</button>
      <img
        className="rb-lightbox__img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
