import Marquee from './Marquee'

const WORDS = [
  'PACS', 'RIS', 'Teleradiology', 'IHMS', 'Pharmacy',
  'Blood Bank', 'EMR', 'Telemedicine', 'IoMT', 'DICOM',
]

// Big awwwards-style scrolling keyword band. Alternates gradient-filled and
// outlined words for a bold, kinetic divider between sections.
export default function KeywordMarquee({ speed = 32 }) {
  return (
    <div className="py-6 md:py-10">
      <Marquee speed={speed}>
        {WORDS.map((w, i) => (
          <span key={w} className="flex items-center gap-8 pr-8">
            <span
              className={
                i % 2 === 0
                  ? 'bg-gradient-to-r from-teal-bright to-cyan bg-clip-text text-5xl font-extrabold uppercase tracking-tight text-transparent md:text-7xl'
                  : 'text-5xl font-extrabold uppercase tracking-tight text-transparent md:text-7xl [-webkit-text-stroke:1px_rgba(139,163,181,0.45)]'
              }
            >
              {w}
            </span>
            <span className="text-3xl text-primary/60 md:text-5xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
