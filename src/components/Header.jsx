import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu, ChevronDown, ArrowRight,
  ScanLine, Building2, Cable, MonitorPlay,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle,
} from '@/components/ui/sheet'
import Container from '@/components/site/Container'
import { cn } from '@/lib/utils'

const SOLUTION_GROUPS = [
  {
    heading: 'Radiology',
    icon: ScanLine,
    items: [
      { to: '/pacs', label: 'PACS' },
      { to: '/ris', label: 'RIS' },
      { to: '/teleradiology', label: 'Teleradiology' },
      { to: '/dicom-burner', label: 'DICOM Burner' },
      { to: '/dicom-camera', label: 'DICOM Camera' },
    ],
  },
  {
    heading: 'Hospital Management',
    icon: Building2,
    items: [
      { to: '/ihms', label: 'IHMS' },
      { to: '/pharmacy-management', label: 'Pharmacy Management' },
      { to: '/blood-bank-management', label: 'Blood Bank Management' },
      { to: '/emr', label: 'Electronic Medical Records' },
      { to: '/lis', label: 'Lab Information System' },
      { to: '/neopead-emr', label: 'Neopead EMR & Charting' },
      { to: '/asset-management', label: 'Asset Management' },
    ],
  },
  {
    heading: 'Interfacing Applications',
    icon: Cable,
    items: [
      { to: '/lab-equipment-interfacing', label: 'Lab Equipment Interfacing' },
      { to: '/iomt-interfacing', label: 'IoMT & Interfacing' },
      { to: '/electronic-charting', label: 'Electronic Charting' },
    ],
  },
  {
    heading: 'Other Applications',
    icon: MonitorPlay,
    items: [
      { to: '/ot-video-broadcasting', label: 'OT-Video Broadcasting' },
      { to: '/telemedicine', label: 'Telemedicine' },
      { to: '/patient-id-wristbands', label: 'Patient ID Wristbands' },
    ],
  },
]

const COMPANY_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/our-team', label: 'Our Team' },
  { to: '/careers', label: 'Careers' },
  { to: '/clients', label: 'Clients' },
  { to: '/news-and-events', label: 'News & Events' },
  { to: '/downloads', label: 'Downloads' },
]

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const closeTimer = useRef(null)

  const requestDemo = (e) => {
    e.preventDefault()
    setMobileOpen(false)
    const scrollToForm = () => {
      const el = document.getElementById('req-demo')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname === '/') scrollToForm()
    else {
      navigate('/')
      setTimeout(scrollToForm, 450)
    }
  }

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null)
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  const open = (which) => { clearTimeout(closeTimer.current); setOpenMenu(which) }
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160)
  }

  const linkClass = ({ isActive }) =>
    cn(
      'relative whitespace-nowrap px-1 py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-grad after:transition-transform hover:after:scale-x-100',
      isActive ? 'text-foreground after:scale-x-100' : 'text-muted-foreground hover:text-foreground'
    )

  const triggerClass = (which) =>
    cn(
      'inline-flex items-center gap-1 whitespace-nowrap px-1 py-1 text-sm font-medium transition-colors',
      openMenu === which ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    )

  return (
    <header
      ref={navRef}
      className={cn(
        'sticky top-0 z-[1200] transition-colors duration-300',
        scrolled ? 'bg-[#0a1420]/85 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <Container size="wide" className={cn('flex items-center justify-between transition-all duration-300', scrolled ? 'h-16' : 'h-20')}>
        <Link to="/" className="flex shrink-0 items-center" aria-label="Raster Images — Home">
          <img src="/img/Raster-Images-Private-Limited.svg" alt="Raster Images Private Limited" className="h-8 w-auto brightness-0 invert" />
        </Link>

        {/* desktop nav — right aligned */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-7">
            <NavLink to="/" end className={linkClass}>Home</NavLink>

            <div className="relative" onMouseEnter={() => open('solutions')} onMouseLeave={scheduleClose}>
              <button type="button" onClick={() => setOpenMenu((v) => (v === 'solutions' ? null : 'solutions'))} className={triggerClass('solutions')}>
                Healthcare Solutions
                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-300', openMenu === 'solutions' && 'rotate-180')} />
              </button>
            </div>

            <NavLink to="/hardware-products" className={linkClass}>Hardware Products</NavLink>
            <NavLink to="/partners" className={linkClass}>Partners</NavLink>

            <div className="relative" onMouseEnter={() => open('company')} onMouseLeave={scheduleClose}>
              <button type="button" onClick={() => setOpenMenu((v) => (v === 'company' ? null : 'company'))} className={triggerClass('company')}>
                Company
                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-300', openMenu === 'company' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {openMenu === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
                    className="absolute right-0 top-full z-50 w-60 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl bg-[#0c1826]/95 p-2 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                      {COMPANY_LINKS.map((l) => (
                        <Link key={l.to} to={l.to} className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-primary/10 hover:text-teal-bright">
                          {l.label}
                          <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact-us" className={linkClass}>Contact</NavLink>
          </nav>

          <Button onClick={requestDemo} size="sm">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* mobile trigger */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <img src="/img/Raster-Images-Private-Limited.svg" alt="Raster Images" className="mb-6 h-8 w-auto" />
              <nav className="flex flex-col gap-1">
                <SheetClose asChild><Link to="/" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10">Home</Link></SheetClose>

                <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Healthcare Solutions</div>
                {SOLUTION_GROUPS.map((g) => (
                  <div key={g.heading} className="mb-1">
                    <div className="px-3 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{g.heading}</div>
                    {g.items.map((item) => (
                      <SheetClose asChild key={item.to}>
                        <Link to={item.to} className="block rounded-lg px-4 py-2 text-sm text-foreground/85 hover:bg-primary/10 hover:text-teal-bright">{item.label}</Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}

                <div className="my-2 h-px bg-white/5" />
                <SheetClose asChild><Link to="/hardware-products" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10">Hardware Products</Link></SheetClose>
                <SheetClose asChild><Link to="/partners" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10">Partners</Link></SheetClose>
                <SheetClose asChild><Link to="/contact-us" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10">Contact</Link></SheetClose>

                <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Company</div>
                {COMPANY_LINKS.map((l) => (
                  <SheetClose asChild key={l.to}>
                    <Link to={l.to} className="rounded-lg px-4 py-2 text-sm text-foreground/85 hover:bg-primary/10 hover:text-teal-bright">{l.label}</Link>
                  </SheetClose>
                ))}
                <Button onClick={requestDemo} className="mt-4 w-full">Request a Demo</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>

      {/* Desktop dropdown panels (full-width row under the bar) */}
      <AnimatePresence>
        {openMenu === 'solutions' && (
          <motion.div
            key="solutions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            onMouseEnter={() => open('solutions')}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <Container size="wide" className="pb-4">
              <div className="overflow-hidden rounded-2xl bg-[#0c1826]/95 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                <div className="grid gap-2 p-5 md:grid-cols-4">
                  {SOLUTION_GROUPS.map((group) => (
                    <div key={group.heading} className="rounded-xl p-2">
                      <div className="mb-2 flex items-center gap-2 px-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/12 text-primary">
                          <group.icon className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{group.heading}</span>
                      </div>
                      <ul className="space-y-0.5">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link to={item.to} className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-foreground/90 transition-colors hover:bg-primary/10 hover:text-teal-bright">
                              {item.label}
                              <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
