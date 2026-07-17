import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Download, Archive } from 'lucide-react'
import Section from '@/components/site/Section'
import { cn } from '@/lib/utils'

const BROCHURES = [
  { href: 'downloads/brochure/raster-ipacs.pdf', title: 'PACS', desc: 'Picture Archiving And Communication' },
  { href: 'downloads/brochure/raster-otvb.pdf', title: 'OTVB', desc: 'Operation Theater Video Broadcasting' },
  { href: 'downloads/brochure/raster-iomt.pdf', title: 'IoMT & Interfacing', desc: 'Internet of Medical Things & Interfacing' },
  { href: 'downloads/brochure/raster-dicom-burner.pdf', title: 'Dicom Burner', desc: 'CD/DVD DICOM Burner' },
]

const PRODUCTS = [
  { href: 'https://apps.apple.com/in/app/dicom-camera/id6459410698', title: 'DICOM Camera', desc: 'Download from App Store', archive: true },
]

const TABS = [
  { id: 'brochures', label: 'Product Brochures' },
  { id: 'trial', label: 'Our Products' },
]

function DownloadCard({ href, title, desc, archive }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl bg-[#101d2b]/55 p-5 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-[#14273a]/70 hover:shadow-glow"
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
        {archive ? <Archive className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
      </span>
      <div className="min-w-0 flex-1">
        <h6 className="text-base font-bold text-foreground">{title}</h6>
        <span className="text-sm text-muted-foreground">{desc}</span>
      </div>
      <Download className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </a>
  )
}

const Downloads = () => {
  const [tab, setTab] = useState('brochures')

  return (
    <>
      <div className="container-fluid sub-page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <h4> Downloads </h4>
              <p> <Link to="/"> Home </Link> / Downloads </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="py-14">
        <div className="mb-8 inline-flex rounded-full bg-white/[0.05] p-1 backdrop-blur">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                tab === t.id
                  ? 'bg-accent-grad text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'brochures' && (
          <div>
            <h5 className="mb-5 text-lg font-bold text-teal-bright">Download the product brochures</h5>
            <div className="grid gap-4 md:grid-cols-2">
              {BROCHURES.map((b) => <DownloadCard key={b.href} {...b} />)}
            </div>
          </div>
        )}

        {tab === 'trial' && (
          <div>
            <h5 className="mb-2 text-lg font-bold text-teal-bright">Download the products</h5>
            <p className="mb-5 text-sm text-muted-foreground">There are no more downloads available right now.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {PRODUCTS.map((p) => <DownloadCard key={p.href} {...p} />)}
            </div>
          </div>
        )}
      </Section>
    </>
  )
}

export default Downloads
