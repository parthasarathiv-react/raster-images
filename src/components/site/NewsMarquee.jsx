import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Marquee from './Marquee'

const NEWS = [
  {
    img: '/img/news-and-events/Communication-Workshop-2023.jpg',
    title: 'Communication Workshop - 2023',
    body: 'An engaging workshop to enhance interpersonal skills and refine communication strategies across our team.',
  },
  {
    img: '/img/news-and-events/DICOM-Educational-Conference-2023.jpg',
    title: 'DICOM Educational Conference - 2023',
    body: 'Talks and presentations by the people behind the DICOM standard, covering basics through to DICOMweb™.',
  },
  {
    img: '/img/news-and-events/healthcare-conference-19.jpg',
    title: "Healthcare Conference '19",
    body: 'A strategic platform where healthcare stakeholders assessed steps for tangible progress in healthcare services.',
  },
  {
    img: '/img/news-and-events/cahotech.jpg',
    title: 'CAHOTECH - 2019',
    body: 'The 4th International Healthcare Technology Conference — sharing experience towards more efficient practices.',
  },
]

function NewsCard({ img, title, body }) {
  return (
    <Link
      to="/news-and-events"
      className="group flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl bg-[#101d2b]/55 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#14273a]/70 hover:shadow-glow"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101d2b] via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-foreground">{title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:gap-2.5">
          Read more <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

export default function NewsMarquee() {
  return (
    <Marquee speed={38} className="py-2">
      {NEWS.map((n) => (
        <div key={n.title} className="px-3">
          <NewsCard {...n} />
        </div>
      ))}
    </Marquee>
  )
}
