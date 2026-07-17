import { useEffect, useRef } from 'react'

const DRAG_THRESHOLD = 5 // px of travel before a press counts as a drag, not a click
const FRICTION = 0.94
const MIN_VELOCITY = 0.4 // px/frame — below this the glide has visually stopped

// Click-and-drag horizontal scrolling for an overflow-x container.
//
// Touch pointers are left alone: native touch scrolling already does this and
// does it better (it owns the momentum + rubber-band). This is for mouse.
//
// Returns a ref to attach to the scrolling element.
export default function useDragScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let down = false
    let moved = false
    let startX = 0
    let startScroll = 0
    let lastX = 0
    let lastT = 0
    let velocity = 0 // px per ms, sign follows pointer direction
    let raf = 0

    const glide = () => {
      let v = velocity * 16 // px/ms → px/frame at ~60fps
      const step = () => {
        v *= FRICTION
        if (Math.abs(v) < MIN_VELOCITY) return
        const before = el.scrollLeft
        el.scrollLeft -= v
        if (el.scrollLeft === before) return // hit an end — nothing left to glide
        raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch' || e.button !== 0) return
      cancelAnimationFrame(raf)
      down = true
      moved = false
      startX = e.clientX
      startScroll = el.scrollLeft
      lastX = e.clientX
      lastT = performance.now()
      velocity = 0
    }

    const onPointerMove = (e) => {
      if (!down) return
      const dx = e.clientX - startX

      if (!moved) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return
        moved = true
        el.setPointerCapture?.(e.pointerId)
        el.classList.add('is-dragging')
      }

      el.scrollLeft = startScroll - dx

      const now = performance.now()
      const dt = now - lastT
      if (dt > 0) velocity = (e.clientX - lastX) / dt
      lastX = e.clientX
      lastT = now
    }

    const onPointerUp = (e) => {
      if (!down) return
      down = false
      el.classList.remove('is-dragging')
      if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId)
      // a long pause before release means the pointer stopped — don't glide
      if (moved && !reduced && performance.now() - lastT < 100) glide()
    }

    // A drag that ends on a link would otherwise open it — swallow that click.
    // Capture phase so it dies before the anchor sees it. `moved` survives until
    // the next pointerdown, and click always lands between the two.
    const onClick = (e) => {
      if (moved) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    // kill the browser's native link/image drag ghost
    const onDragStart = (e) => e.preventDefault()

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('click', onClick, true)
    el.addEventListener('dragstart', onDragStart)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('click', onClick, true)
      el.removeEventListener('dragstart', onDragStart)
    }
  }, [])

  return ref
}
