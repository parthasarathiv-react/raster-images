import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
)
const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
)
import Section, { SectionHeading } from '@/components/site/Section'
import Container from '@/components/site/Container'
import Marquee from '@/components/site/Marquee'

const CLIENT_LOGOS = [
  ['AIIMS.jpg', 'AIIMS Hospital'],
  ['Kauvery.jpg', 'Kauvery Hospital'],
  ['Velammal.jpg', 'Velammal Hospital'],
  ['SKS.jpg', 'SKS Hospital'],
  ['chennai-national-hospital.jpg', 'Chennai National Hospital'],
  ['preethi-hospital.jpg', 'Preethi Hospital'],
  ['rainbow-hospital.jpg', 'Rainbow Hospital'],
  ['ramalingam-hospital.jpg', 'Ramalingam Hospital'],
  ['revathi-medical-centre.jpg', 'Revathi Medical Centre'],
  ['royal-care.jpg', 'Royal Care'],
  ['sri-ramakrishna-mission-dispensary.jpg', 'Sri Ramakrishna Mission Dispensary'],
  ['sri-shellappa-hospital.jpg', 'Sri Shellappa Hospital'],
  ['ss-medical-centre.jpg', 'SS Medical Centre'],
  ['voluntary-health-services-multispeciality-hospitals.jpg', 'Voluntary Health Services'],
  ['women-centre.jpg', 'Women Centre'],
]

const QUICK_LINKS = [
  [
    ['/', 'Home'], ['/about', 'About Us'], ['/pacs', 'Healthcare Solutions'],
    ['/partners', 'Partners'], ['/news-and-events', 'News & Events'],
    ['/contact-us', 'Contact Us'], ['/clients', 'Clients'],
  ],
  [
    ['/careers', 'Careers'], ['/our-team', 'Our Team'], ['/downloads', 'Downloads'],
    ['/terms-and-conditions', 'Terms & Conditions'], ['/privacy-policy', 'Privacy Policy'],
    ['/shipping-and-delivery-policy', 'Shipping & Delivery Policy'],
    ['/cancellation-and-refund-policy', 'Cancellation & Refund Policy'],
  ],
]

const Footer = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Clients — bigger, two-row marquee */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Trusted by leading hospitals"
          title="Our Clients"
          subtitle="Powering radiology and hospital workflows at institutions across the country."
          align="center"
        />
        <div className="space-y-5">
          {[CLIENT_LOGOS.slice(0, 8), CLIENT_LOGOS.slice(8)].map((row, r) => (
            <Marquee key={r} speed={r === 0 ? 55 : 48} reverse={r === 1}>
              {row.map(([file, alt]) => (
                <div
                  key={file}
                  className="group flex h-32 w-56 items-center justify-center rounded-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <img
                    src={`/img/clients/${file}`}
                    alt={alt}
                    className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </Marquee>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/12 hover:text-teal-bright"
          >
            View all clients &rarr;
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative bg-[#060d15]/80 pb-8 pt-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <img src="/img/Raster-Images-Private-Limited.svg" alt="Raster Images" className="h-9 w-auto brightness-0 invert" />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                An Information Services &amp; Technology company delivering healthcare software across
                the entire continuum of patient care and hospital administration.
              </p>
              <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Quick Links</h4>
              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                {QUICK_LINKS.map((col, i) => (
                  <div key={i} className="flex flex-col">
                    {col.map(([to, label]) => (
                      <Link
                        key={to + label}
                        to={to}
                        className="py-1 text-sm text-muted-foreground transition-colors hover:translate-x-1 hover:text-teal-bright"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Contact Details</h4>
              <p className="text-base font-semibold text-foreground">Raster Images (P) Ltd.</p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  2<sup>nd</sup> &amp; 3<sup>rd</sup> Floor, AKM Complex,<br />
                  No. 29, Brindavan Road, 4<sup>th</sup> Cross,<br />
                  Kailash Nagar, Fairlands,<br />
                  Salem - 636016, TN
                </span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> +91 427 4033100
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:Info@raster.in" className="hover:text-teal-bright">info@raster.in</a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/raster.in/" target="_blank" rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/15 hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/raster-images" target="_blank" rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/15 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 text-center text-xs text-muted-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            &copy; Copyright 2026 Raster Images. All Rights Reserved.
          </div>
        </Container>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-6 right-6 z-[1300] inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-grad text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
