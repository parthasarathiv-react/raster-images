import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ScanLine, Building2, Pill, Droplets, ClipboardList, Boxes } from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'
import SceneStrip from '../three/SceneStrip'
import ScrollStack, { ScrollStackItem } from '../components/reactbits/ScrollStack'
import Section, { SectionHeading } from '@/components/site/Section'
import Reveal from '@/components/site/Reveal'
import FeatureCard from '@/components/site/FeatureCard'
import NewsMarquee from '@/components/site/NewsMarquee'
import KeywordMarquee from '@/components/site/KeywordMarquee'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const SERVICE_CARDS = [
  { icon: ScanLine, eyebrow: 'Radiology', title: 'PACS / DICOM Solutions', description: 'Vendor-neutral archiving, zero-footprint viewing and fast image access for radiologists.', to: '/pacs' },
  { icon: Building2, eyebrow: 'Hospital', title: 'Hospital Management', description: 'A hybrid HMS for transactions plus a web dashboard for daily stats.', to: '/ihms' },
  { icon: Pill, eyebrow: 'Pharmacy', title: 'Pharmacy Management', description: 'Stock, billing and dispensing across every pharmacy counter.', to: '/pharmacy-management' },
  { icon: Droplets, eyebrow: 'Blood Bank', title: 'Blood Bank Management', description: 'Donor, inventory and cross-match workflows, end to end.', to: '/blood-bank-management' },
  { icon: ClipboardList, eyebrow: 'Records', title: 'Electronic Medical Record', description: 'Structured, interoperable patient records across departments.', to: '/emr' },
  { icon: Boxes, eyebrow: 'Assets', title: 'Asset Management', description: 'Track and maintain biomedical and IT assets over their lifecycle.', to: '/asset-management' },
]

const SOLUTION_STACK = [
  { tag: 'Imaging', title: 'Picture Archiving & Communication', body: 'Raster iPACS delivers rapid image loading, multi-monitor reading and a vendor-neutral archive — a single-vendor RIS/PACS solution.', to: '/pacs' },
  { tag: 'Hospital', title: 'Integrated Hospital Management', body: 'Raster iHMS pairs a feature-rich desktop for transaction entry with a web app for live stats and dashboards.', to: '/ihms' },
  { tag: 'Interoperability', title: 'IoMT & Lab Equipment Interfacing', body: 'Connect medical devices and analysers for seamless, standards-based data exchange across departments.', to: '/iomt-interfacing' },
  { tag: 'Care', title: 'Telemedicine & Teleradiology', body: 'Extend diagnosis and consultation beyond the hospital walls with secure remote reading and video care.', to: '/teleradiology' },
]

const INTRO = [
  {
    title: 'Who We Are?',
    body: 'Raster Images Private Limited is an Information Services & Technology company with over 20 years of professional experience, providing software consultancy and solutions to cover the entire continuum of patient care and hospital administration to clients globally. We are involved in several verticals, of which healthcare is our primary focus.',
    linkSuffix: 'about who Raster Images is',
  },
  {
    title: 'What We Do?',
    body: 'Setting up a fully functional software infrastructure for any medical institute is a daunting process. Another challenge is interoperability — enabling seamless data exchange between departments. At Raster, we believe in the power of open source and interoperability to achieve lower infrastructure cost.',
    linkSuffix: 'about what Raster Images does',
  },
]

const Home = () => {
  return (
    <>
      <HeroCarousel />

      {/* Intro */}
      <Section className="py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {INTRO.map((b, idx) => (
            <Reveal key={b.title} delay={idx * 0.1}>
              <Card className="h-full p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#14273a]/70">
                <span className="mb-4 inline-block h-1 w-12 rounded-full bg-accent-grad" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{b.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                <Link to="/about" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-cyan">
                  Read More<span className="sr-only"> {b.linkSuffix}</span> <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="Healthcare Solutions" title="Our Services" align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((c, i) => (
            <Reveal key={c.to} delay={(i % 3) * 0.08}>
              <FeatureCard
                icon={<c.icon className="h-6 w-6" />}
                eyebrow={c.eyebrow}
                title={c.title}
                description={c.description}
                to={c.to}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* awwwards-style keyword band */}
      <KeywordMarquee />

      {/* Solutions scroll stack */}
      <Section>
        <SectionHeading eyebrow="Scroll to explore the stack" title="Our Solutions" align="center" />
        <ScrollStack useWindowScroll itemDistance={80} baseScale={0.86} itemStackDistance={28}>
          {SOLUTION_STACK.map((s) => (
            <ScrollStackItem key={s.title}>
              <span className="solution-tag">{s.tag}</span>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-body">{s.body}</p>
              <Link to={s.to} className="hero-cta">Read More<span className="sr-only"> about {s.title}</span></Link>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </Section>

      {/* 3D scene */}
      <Section>
        <SceneStrip subheading="Interoperable by Design" heading="One Connected Healthcare Ecosystem" />
      </Section>

      {/* Request a demo */}
      <Section id="req-demo">
        <Reveal>
          <Card className="mx-auto max-w-4xl overflow-hidden p-8 sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Get in touch"
                title="Request a Demo"
                subtitle="Get answers to your unique questions and find out why Raster is the right choice for your business."
                align="center"
                className="mb-8"
              />
            </div>
            <form name="req-demo" method="post" className="space-y-5">
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name *</label>
                  <Input id="name" name="name" placeholder="Enter Your Full Name" />
                </div>
                <div>
                  <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-foreground">Mobile *</label>
                  <Input id="mobile" name="mobile" placeholder="Enter Your Mobile Number" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">E-mail *</label>
                  <Input id="email" name="email" type="email" placeholder="Enter Your E-mail ID" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Comments</label>
                <Textarea id="message" name="message" rows={4} placeholder="Enter your comment about what you want to enquire" />
              </div>
              <div className="text-center">
                <Button type="button" id="req-demo-submit" size="lg">Submit</Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </Section>

      {/* News & events */}
      <Section containerSize="wide">
        <SectionHeading eyebrow="What's happening" title="Recent News & Events" align="center" />
      </Section>
      <div className="pb-16 lg:pb-24">
        <NewsMarquee />
      </div>
    </>
  )
}

export default Home
