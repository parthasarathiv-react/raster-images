import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Reveal from '../components/site/Reveal';
import './news-events.css';

/* Copy carried over verbatim from the old float-image layout. `date` keeps the
   original human string for the <time> element; day/month/year drive the rail. */
const EVENTS = [
    {
        day: '12',
        monthYear: 'Dec 2023',
        date: '12 December 2023',
        title: 'Communication Workshop - 2023',
        img: '/img/news-and-events/Communication-Workshop-2023.jpg',
        paras: [
            'At Raster Images, fostering effective communication is paramount. Recently, we conducted an engaging Communication Workshop for our dedicated employees. The workshop featured a series of activities designed to enhance interpersonal skills, encourage open dialogue, and refine communication strategies within our team. It was a dynamic session aimed at cultivating a more cohesive and communicative work environment, empowering each member to excel in their interactions and collaborations. We’re committed to continual growth, and this workshop was a step towards nurturing stronger connections and clearer communication across our organization.',
        ],
    },
    {
        day: '9–11',
        monthYear: 'Oct 2023',
        date: '9,10 & 11 October 2023',
        title: 'DICOM Educational Conference - 2023',
        img: '/img/news-and-events/DICOM-Educational-Conference-2023.jpg',
        paras: [
            'The DICOM Education Conference is a series of talks and presentations which was conducted on the 9th, 10th & 11th October overseen by the people behind the standard along with local partners to spread knowledge of the standard. It started with the basics, introducing the concepts of DICOM and went on to cover important aspects of the standard. Recent additions to the standard such as DICOMweb™ were also covered.',
            'The DICOM Education Conference is a great starting point for beginners to learn about Medical Imaging Informatics and also serves as a refresher for those more experienced. This conference was also an opportunity to interact with your peers and gain from their experience.',
        ],
        listTitle: 'Confirmed topics for the DICOM Conference',
        list: [
            'AI Results Encoding',
            'DICOM Cyber 101',
            'DICOM ECG Files Conversion | Heart Diseases Prediction & Progression',
            'DICOM and FHIR, IHE, etc.',
            'DICOM Security - advanced',
            'DICOMweb',
            'Enabling a multi-modal Clinical data repository using openEHR and DICOM',
            'History and future of DICOM',
            'Integration and Implementation Strategies for AI Algorithm Development, Deployment and Enhancement using DICOM and Other Standards',
            'Multi-modal Clinical data repository using openEHR and DICOM',
            'Leveraging DICOM and IHE standards to deploy AI for Diabetic Retinopathy Screening at Vision centres in Rural Tamil Nadu',
        ],
    },
    {
        day: '27',
        monthYear: 'Sep 2019',
        date: '27 September 2019',
        title: 'CAHOTECH - 2019',
        img: '/img/news-and-events/cahotech.jpg',
        paras: [
            'CAHOTECH 2019, the 4th International Healthcare Technology Conference of Consortium of Accredited Healthcare Organisations was conducted on 27th and 28th September 2019 at Chennai.',
            'CAHOTECH is a platform for healthcare organisations and technology industry to share and utilise combined experience, to guide themselves continuously towards more efficient practices utilising technological development.',
            'The 2- day event included a pre-conference workshops & masterclasses on the preceding day of the main conference (28th Sep) which highly focused on how to understand future healthcare technologies for clinicians, hospital managers and administrators, biomedical engineers, scientists, researchers and other stakeholders of healthcare industry interested in promoting change through innovation and advancement in healthcare.',
        ],
    },
    {
        day: '12',
        monthYear: 'Sep 2019',
        date: '12 September 2019',
        title: 'Healthcare Conference - 2019',
        img: '/img/news-and-events/healthcare-conference-19.jpg',
        paras: [
            'CII Salem organised the First Edition of “Healthcare Conference” on the 12th September 2019 at Radisson Hotel. The “Healthcare Conference” was designed as a strategic platform where healthcare stakeholders from across the region will congregate to asses and re-examine the steps that need to be taken up for attaining tangible progress in healthcare services.',
            'The conference had lined up an array of professionals to guide the stakeholders on enhancing profitability. Some of the highlighted topics are, “Enhancing profitability through operational excellence”, “Health care analytics”, “Challenges and opportunity in small and medium segment hospitals” and others.',
        ],
    },
];

// Image drifts slightly against the scroll. The img is over-scaled just enough
// to cover the ±3% travel ((scale - 1) / 2 must exceed the drift), and no more:
// these photos carry text right up to the edge, so every extra % of scale crops
// something that matters.
const DRIFT = 3;                       // % of height, each way
const COVER = 1 + (DRIFT / 100) * 2 + 0.02;   // 1.08

const ParallaxMedia = ({ src, alt }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [`-${DRIFT}%`, `${DRIFT}%`]);

    return (
        <figure className="ne__media" ref={ref}>
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                style={reduce ? undefined : { y, scale: COVER }}
            />
        </figure>
    );
};

const NewsAndEvents = () => {
    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> News &amp; Events </h4>
                            <p> <Link to="/"> Home </Link> / News &amp; Events </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <Reveal className="mb-12 max-w-2xl">
                    <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                        Newsroom
                    </span>
                    <h4 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-3xl">
                        Workshops, conferences and what we&apos;ve been part of
                    </h4>
                </Reveal>

                <div className="ne">
                    {EVENTS.map((e) => (
                        <article className="ne__item" key={e.title}>
                            <Reveal className="ne__date" y={20}>
                                <time dateTime={e.date} title={e.date}>
                                    <span className="ne__day">{e.day}</span>
                                    <span className="ne__monthyear">{e.monthYear}</span>
                                </time>
                            </Reveal>

                            <div className="ne__body">
                                <Reveal as="h5" className="ne__title" y={24}>
                                    {e.title}
                                </Reveal>

                                <ParallaxMedia src={e.img} alt={e.title} />

                                <Reveal className="ne__copy" y={28} delay={0.05}>
                                    {e.paras.map((p) => (
                                        <p key={p.slice(0, 40)}>{p}</p>
                                    ))}

                                    {e.list && (
                                        <>
                                            <p>{e.listTitle}</p>
                                            <ul className="ne__list">
                                                {e.list.map((li) => (
                                                    <li key={li}>{li}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </Reveal>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NewsAndEvents;
