import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Container from './Container'

// Eyebrow + heading block. The title uses an awwwards-style clip-mask "rise"
// reveal on scroll; eyebrow and subtitle fade up with a small stagger.
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className }) {
  const reduce = useReducedMotion()
  const view = { once: true, margin: '0px 0px -12% 0px' }

  return (
    <div
      className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.5 }}
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <span className="block overflow-hidden pb-[0.12em]">
          <motion.h2
            initial={reduce ? false : { y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={view}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
        </span>
      )}
      {subtitle && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

// Vertical rhythm wrapper for a page section.
export default function Section({ className, containerClassName, containerSize, children, id, ...props }) {
  return (
    <section id={id} className={cn('relative py-16 sm:py-20 lg:py-24', className)} {...props}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
