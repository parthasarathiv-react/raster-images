import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Reusable product/service card with a cursor-following spotlight, teal border
// glow on hover, and an optional icon. Used to replace the old Bootstrap cards
// across product/solution pages.
export default function FeatureCard({
  icon,
  eyebrow,
  title,
  description,
  to,
  href,
  className,
  children,
}) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const inner = (
    <Card
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        'relative h-full overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#14273a]/70 hover:shadow-glow',
        (to || href) && 'cursor-pointer',
        className
      )}
    >
      {/* cursor spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 0%), rgba(95, 166, 255,0.14), transparent 70%)',
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary shadow-[inset_0_0_24px_rgba(95, 166, 255,0.18)]">
            {icon}
          </div>
        )}
        {eyebrow && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            {eyebrow}
          </span>
        )}
        {title && (
          <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground">{title}</h3>
        )}
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
        {children}
        {(to || href) && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 group-hover:gap-2.5">
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </Card>
  )

  if (to) return <Link to={to} className="block h-full focus:outline-none">{inner}</Link>
  if (href) return <a href={href} className="block h-full focus:outline-none">{inner}</a>
  return inner
}
