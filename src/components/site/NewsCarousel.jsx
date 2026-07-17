import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

const NEWS = [
  {
    img: '/img/news-and-events/Communication-Workshop-2023.jpg',
    title: 'Communication Workshop - 2023',
    body: 'At Raster Images, fostering effective communication is paramount. Recently, we conducted an engaging Communication Workshop for our dedicated employees. The workshop featured a series of activities designed to enhance interpersonal skills, encourage open dialogue, and refine communication strategies within our team.',
  },
  {
    img: '/img/news-and-events/DICOM-Educational-Conference-2023.jpg',
    title: 'DICOM Educational Conference - 2023',
    body: 'The DICOM Education Conference is a series of talks and presentations conducted on the 9th, 10th & 11th October, overseen by the people behind the standard along with local partners to spread knowledge of the standard. It covered the basics through to important aspects such as DICOMweb™.',
  },
  {
    img: '/img/news-and-events/healthcare-conference-19.jpg',
    title: "Healthcare Conference '19",
    body: 'CII Salem organised the First Edition of the “Healthcare Conference” on 12th September 2019 at Radisson Hotel — a strategic platform where healthcare stakeholders congregate to assess the steps needed for tangible progress in healthcare services.',
  },
  {
    img: '/img/news-and-events/cahotech.jpg',
    title: 'CAHOTECH - 2019',
    body: 'CAHOTECH 2019, the 4th International Healthcare Technology Conference of the Consortium of Accredited Healthcare Organisations, was conducted on 27th and 28th September 2019 at Chennai — a platform to share and utilise combined experience towards more efficient practices.',
  },
]

export default function NewsCarousel() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const go = useCallback((n) => {
    setDir(n > i ? 1 : -1)
    setI((n + NEWS.length) % NEWS.length)
  }, [i])

  useEffect(() => {
    const id = setInterval(() => { setDir(1); setI((p) => (p + 1) % NEWS.length) }, 6000)
    return () => clearInterval(id)
  }, [])

  const item = NEWS[i]

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden md:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.img}
                src={item.img}
                alt={item.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className="flex flex-col justify-center p-7 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: dir * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -24 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link
                  to="/news-and-events"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-cyan"
                >
                  Read more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Card>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button" aria-label="Previous"
          onClick={() => go(i - 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/[0.04] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {NEWS.map((n, idx) => (
            <button
              key={n.title}
              type="button" aria-label={`Go to ${n.title}`}
              onClick={() => go(idx)}
              className="h-2 rounded-full transition-all"
              style={{
                width: idx === i ? 28 : 8,
                background: idx === i ? 'linear-gradient(135deg,#5fa6ff,#3b82f6)' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
        <button
          type="button" aria-label="Next"
          onClick={() => go(i + 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/[0.04] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
