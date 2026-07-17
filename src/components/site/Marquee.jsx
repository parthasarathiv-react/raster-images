import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const DRAG_THRESHOLD = 5 // px of travel before a press counts as a drag, not a click
const FRICTION = 0.94 // per 60fps frame; scaled by real dt so 120Hz glides the same
const MIN_FLICK = 0.02 // px/ms — below this the throw has spent itself

// Infinite, drag-able logo/keyword marquee. Replaces the jQuery/slick client slider.
//
// The track is JS-driven rather than a CSS keyframe: a keyframe can't be grabbed
// mid-flight, and drag has to own the transform. Children are duplicated so the
// loop is seamless; the copy is aria-hidden.
//
// Drift, drag and throw all write the same `offset`, so they compose: releasing a
// throw decays back into the base drift instead of snapping.
export default function Marquee({ children, className, speed = 40, reverse = false, draggable = true }) {
  const trackRef = useRef(null)
  const viewportRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dir = reverse ? 1 : -1

    let loopWidth = 0 // distance from copy A's start to copy B's start
    let offset = 0
    let raf = 0
    let lastFrame = 0
    let paused = false
    let dragging = false
    let moved = false
    let startX = 0
    let startOffset = 0
    let lastX = 0
    let lastT = 0
    let flick = 0 // px/ms carried out of a drag release

    // Measure the real gap between the two copies rather than assuming -50%:
    // the track's flex `gap` sits between them, so half the width overshoots by
    // gap/2 and the loop visibly hitches once per cycle.
    const measure = () => {
      const [a, b] = track.children
      if (a && b) loopWidth = b.offsetLeft - a.offsetLeft
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)

    // normalise into [-loopWidth, 0) — the track repeats every loopWidth
    const wrap = () => {
      if (loopWidth > 0) offset = ((offset % loopWidth) + loopWidth) % loopWidth - loopWidth
    }

    const frame = (t) => {
      const dt = lastFrame ? Math.min(t - lastFrame, 50) : 16
      lastFrame = t

      if (!dragging) {
        if (Math.abs(flick) > MIN_FLICK) {
          offset += flick * dt
          flick *= Math.pow(FRICTION, dt / 16.67)
        } else {
          flick = 0
          if (!paused && !reduced && loopWidth > 0) {
            offset += dir * (loopWidth / (speed * 1000)) * dt
          }
        }
      }

      wrap()
      track.style.transform = `translate3d(${offset}px,0,0)`
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    // hover-pause is a fine-pointer affordance; a tap fires pointerenter with no
    // matching pointerleave, which would strand the track paused on mobile
    const onEnter = (e) => { if (e.pointerType !== 'touch') paused = true }
    const onLeave = () => { paused = false }
    viewport.addEventListener('pointerenter', onEnter)
    viewport.addEventListener('pointerleave', onLeave)

    let cleanupDrag = () => {}
    if (draggable) {
      // Touch is left alone: the marquee isn't a scroll container, so claiming
      // touch drags here risks fighting vertical page scroll for little gain.
      const onPointerDown = (e) => {
        if (e.pointerType === 'touch' || e.button !== 0) return
        dragging = true
        moved = false
        flick = 0
        startX = e.clientX
        startOffset = offset
        lastX = e.clientX
        lastT = performance.now()
      }

      const onPointerMove = (e) => {
        if (!dragging) return
        const dx = e.clientX - startX

        if (!moved) {
          if (Math.abs(dx) < DRAG_THRESHOLD) return
          moved = true
          viewport.setPointerCapture?.(e.pointerId)
          viewport.classList.add('is-dragging')
        }

        offset = startOffset + dx

        const now = performance.now()
        const elapsed = now - lastT
        if (elapsed > 0) flick = (e.clientX - lastX) / elapsed
        lastX = e.clientX
        lastT = now
      }

      const onPointerUp = (e) => {
        if (!dragging) return
        dragging = false
        viewport.classList.remove('is-dragging')
        if (viewport.hasPointerCapture?.(e.pointerId)) viewport.releasePointerCapture(e.pointerId)
        // a pause before release means the pointer had already stopped — no throw
        if (!moved || reduced || performance.now() - lastT > 100) flick = 0
      }

      // A drag that ends on a card would otherwise follow its link. Capture phase
      // so it dies before the anchor sees it; `moved` survives until the next
      // pointerdown, and click always lands between the two.
      const onClick = (e) => {
        if (moved) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
      const onDragStart = (e) => e.preventDefault()

      viewport.addEventListener('pointerdown', onPointerDown)
      viewport.addEventListener('pointermove', onPointerMove)
      viewport.addEventListener('pointerup', onPointerUp)
      viewport.addEventListener('pointercancel', onPointerUp)
      viewport.addEventListener('click', onClick, true)
      viewport.addEventListener('dragstart', onDragStart)

      cleanupDrag = () => {
        viewport.removeEventListener('pointerdown', onPointerDown)
        viewport.removeEventListener('pointermove', onPointerMove)
        viewport.removeEventListener('pointerup', onPointerUp)
        viewport.removeEventListener('pointercancel', onPointerUp)
        viewport.removeEventListener('click', onClick, true)
        viewport.removeEventListener('dragstart', onDragStart)
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      viewport.removeEventListener('pointerenter', onEnter)
      viewport.removeEventListener('pointerleave', onLeave)
      cleanupDrag()
    }
  }, [speed, reverse, draggable])

  return (
    <div
      ref={viewportRef}
      className={cn(
        'group relative w-full overflow-hidden',
        draggable && 'drag-surface cursor-grab',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
      <div ref={trackRef} className="flex w-max items-center gap-6 will-change-transform">
        {[0, 1].map((k) => (
          <div key={k} aria-hidden={k === 1} className="flex shrink-0 items-center gap-6">
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
