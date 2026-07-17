import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import IomtHub from '../three/IomtHub'
import { Button } from '@/components/ui/button'
import Container from '@/components/site/Container'

const SLIDES = [
  {
    tag: 'Digital Healthcare',
    title: 'Revolutionizing Digital Healthcare',
    body: 'Raster Images is a 30-year-old multifaceted IT-enabled services company based in Salem, India, with affiliates in the United States, United Kingdom & South Africa and clients across the world.',
    img: '/img/banner/redefining-digital-healthcare.jpg',
    alt: 'Digital healthcare across desktop, laptop, tablet and phone',
  },
  {
    tag: 'Radiology',
    title: 'Radiology, Reimagined',
    body: 'If a hospital is to thrive in the health-care marketplace of the future, they have to put a premium on IT investment — image archives and data storage are increasingly critical.',
    img: '/img/banner/radiology.jpg',
    alt: 'Radiologist reviewing MRI scans',
    to: '/pacs',
    cta: 'Explore PACS',
  },
  {
    tag: 'Hospital Systems',
    title: 'Integrated Hospital Information System',
    body: 'Raster iHMS is a hybrid application with a feature-rich desktop for transaction entry and a web application for daily stats and dashboards.',
    img: '/img/banner/intgerated-hospital-managament-system.jpg',
    alt: 'Doctor using a hospital information system',
    to: '/ihms',
    cta: 'Explore iHMS',
  },
  {
    tag: 'Laboratory',
    title: 'LIS & Interfacing',
    body: 'A Laboratory Information System lets you manage the flow of samples and patient data to improve lab efficiency — Raster LIS standardises workflows across every bench.',
    img: '/img/banner/lis-and-interfacing.jpg',
    alt: 'Laboratory analyser interfaced with a lab information system',
    // raster.in links this slide to lis-and-interfacing.php, which 404s on the
    // live site. lis.php is the page that actually exists, hence /lis here.
    to: '/lis',
    cta: 'Explore LIS',
  },
  {
    tag: 'Paediatrics',
    title: 'Neopead EMR & Charting',
    body: 'Your paperless medical practice is here — created by doctors, for doctors, with charting built around how paediatricians actually work.',
    img: '/img/banner/pediatric-emr.jpg',
    alt: 'Paediatric electronic medical record and charting on screen',
    to: '/neopead-emr',
    cta: 'Explore Neopead EMR',
  },
  {
    tag: 'Interoperability',
    title: 'IoMT & Interfacing',
    body: 'Even today, most clinical labs manually program tests into analysers, copy results into a register and transcribe them once more into the LIS. Connected devices remove all three steps.',
    img: '/img/banner/iomt-device-interfacing.jpg',
    alt: 'Connected medical devices exchanging data across a hospital network',
    to: '/iomt-interfacing',
    cta: 'Explore IoMT',
  },
  {
    tag: 'Operation Theatre',
    title: 'OT — Video Broadcasting',
    body: 'Digital video recording is increasingly used across medical and surgical disciplines — for medical-legal documentation, teaching and live theatre broadcast.',
    img: '/img/banner/operation-theatre-broadcasting.jpg',
    alt: 'Operation theatre procedure being recorded and broadcast',
    to: '/ot-video-broadcasting',
    cta: 'Explore OT Broadcasting',
  },
]

const INTERVAL = 4000

const HeroCarousel = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const goTo = useCallback((i) => setActive((i + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused, active])

  const slide = SLIDES[active]

  return (
    <section
      className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(95, 166, 255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(95, 166, 255,0.06) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(70% 60% at 50% 30%, #000 40%, transparent 100%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />

      <Container size="wide" className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* copy */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              // No blur filter: this is the hero (the LCP region) and it
              // re-animates on every slide change. Animating `filter` repaints
              // the whole headline each frame instead of staying on the
              // compositor; opacity + transform are composited.
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> {slide.tag}
              </span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {slide.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#req-demo">Request a Demo <ArrowRight className="h-4 w-4" /></a>
            </Button>
            {slide.to && (
              <Button asChild variant="outline" size="lg">
                <Link to={slide.to}>{slide.cta}</Link>
              </Button>
            )}
          </div>

          {/* progress dots */}
          <div className="mt-10 flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Show ${s.title}`}
                onClick={() => goTo(i)}
                className="group relative h-1.5 overflow-hidden rounded-full bg-white/10 transition-all"
                style={{ width: i === active ? 44 : 20 }}
              >
                {i === active && (
                  <motion.span
                    key={active}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute inset-0 rounded-full bg-accent-grad"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* visual */}
        <div className="relative order-1 lg:order-2">
          {/* IoMT hub: its own panel in the gutter to the right of the image —
              never overlapping it, so the image reads clean. The image gives up
              the width (64%) that the hub occupies.
              -right-8 is the most it can bleed: the container is edge-to-edge
              minus its 32px padding until max-w-7xl, so anything further would
              be eaten by the section's overflow-hidden on a 1280 laptop.
              The scene scales itself to this narrow box (see IomtHubScene). */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-1/2 z-0 hidden h-[125%] w-[36%] -translate-y-1/2 [&_.iomt-hub]:min-h-0 lg:block"
          >
            <IomtHub />
          </div>
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#101d2b]/40 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] backdrop-blur lg:w-[64%]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.img}
                src={slide.img}
                alt={slide.alt}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroCarousel
