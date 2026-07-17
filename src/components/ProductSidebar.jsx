import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ScanLine, Building2, Network, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'

const SECTIONS = [
  {
    heading: 'Radiology',
    icon: ScanLine,
    items: [
      ['/pacs', 'PACS'],
      ['/ris', 'RIS'],
      ['/teleradiology', 'Teleradiology'],
      ['/dicom-burner', 'DICOM Burner'],
      ['/dicom-camera', 'DICOM Camera'],
    ],
  },
  {
    heading: 'Hospital Management',
    icon: Building2,
    items: [
      ['/ihms', 'IHMS'],
      ['/pharmacy-management', 'Pharmacy Management'],
      ['/blood-bank-management', 'Blood Bank Management'],
      ['/emr', 'EMR'],
      ['/lis', 'Lab Information System'],
      ['/neopead-emr', 'Neopead EMR & Charting'],
      ['/asset-management', 'Asset Management'],
    ],
  },
  {
    heading: 'Interfacing Applications',
    icon: Network,
    items: [
      ['/lab-equipment-interfacing', 'Lab Equipment Interfacing'],
      ['/iomt-interfacing', 'IoMT & Interfacing'],
      ['/electronic-charting', 'Electronic Charting'],
    ],
  },
  {
    heading: 'Other Applications',
    icon: LayoutGrid,
    items: [
      ['/ot-video-broadcasting', 'OT - Video Broadcasting'],
      ['/telemedicine', 'Telemedicine'],
      ['/patient-id-wristbands', 'Patient ID Wristbands'],
    ],
  },
]

// Product navigation as a borderless rail: no panel, no card, no glass. Links
// sit directly on the page background and every category stays expanded. The
// only chrome is a hairline guide rail; the active item lights a segment of it.
const ProductSidebar = ({ colClassName = 'col-xl-3' }) => {
  const location = useLocation()

  return (
    <aside className={cn(colClassName, 'mb-8 xl:mb-0')}>
      {/* no card to anchor the eye, so the rail carries its own left inset */}
      <div className="sticky top-24 xl:pl-3">
        <p className="mb-6 text-lg font-extrabold tracking-tight text-foreground">
          Healthcare{' '}
          <span className="bg-gradient-to-r from-teal-bright to-cyan bg-clip-text text-transparent">
            Solutions
          </span>
        </p>

        <nav className="space-y-7">
          {SECTIONS.map((section) => {
            const Icon = section.icon
            const hasActive = section.items.some(([to]) => to === location.pathname)
            return (
              <div key={section.heading}>
                <p className="mb-2.5 flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <Icon
                    className={cn(
                      'h-3.5 w-3.5 shrink-0 transition-colors duration-300',
                      hasActive ? 'text-teal-bright' : 'text-muted-foreground/50'
                    )}
                    strokeWidth={2.25}
                  />
                  <span className={hasActive ? 'text-foreground/75' : 'text-muted-foreground/60'}>
                    {section.heading}
                  </span>
                </p>

                {/* hairline guide rail — the active item lights its own segment */}
                <ul className="relative ml-[7px] space-y-px border-l border-white/[0.07] pl-0">
                  {section.items.map(([to, label]) => {
                    const active = location.pathname === to
                    return (
                      <li key={to}>
                        <Link
                          to={to}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'group relative block py-1.5 pl-4 text-sm transition-colors duration-300',
                            active
                              ? 'font-semibold text-teal-bright'
                              : 'text-muted-foreground hover:text-foreground'
                          )}
                        >
                          {/* rail segment: solid + glowing when active, faint on hover */}
                          <span
                            className={cn(
                              'absolute inset-y-0 -left-px w-0.5 rounded-full transition-all duration-300',
                              active
                                ? 'bg-teal-bright shadow-[0_0_10px_1px_rgba(116,179,255,0.6)]'
                                : 'bg-transparent group-hover:bg-white/20'
                            )}
                          />

                          <span className="inline-block whitespace-nowrap transition-transform duration-300 group-hover:translate-x-0.5">
                            {label}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default ProductSidebar
