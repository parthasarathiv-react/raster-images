import { motion, useReducedMotion } from 'framer-motion'

// Scroll-in reveal used across the site. Wraps children in a motion element that
// rises + fades as it enters the viewport. Honors prefers-reduced-motion.
//
// Deliberately no blur filter: animating `filter` forced a repaint of the whole
// subtree every frame and read as the page loading in out-of-focus on arrival.
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 40,
  once = true,
  ...props
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
