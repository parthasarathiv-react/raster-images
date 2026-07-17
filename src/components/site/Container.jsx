import { cn } from '@/lib/utils'

// Centered content column. Replaces Bootstrap's .container with a Tailwind primitive.
export default function Container({ className, children, size = 'default', ...props }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-6xl',
        size === 'wide' && 'max-w-7xl',
        size === 'narrow' && 'max-w-4xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
