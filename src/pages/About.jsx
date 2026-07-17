import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SceneStrip from '../three/SceneStrip';
import ScrollTimeline from '../components/site/ScrollTimeline';
import Reveal from '../components/site/Reveal';

const TABS = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'history', label: 'History' },
];

/* The SKS Group story, ordered chronologically for the timeline (the flat copy
   it replaces ran Group → Automobiles → Hospital → VSET). */
const HISTORY = [
    {
        year: '1987',
        title: 'SKS Group',
        body: 'SKS Group based out of Salem, Tamil Nadu started in the year 1987 has interests in Automotive, Healthcare, Information Technology & Education with over 1200 employees. Our core focus is on customer centricity, good business practice, employee welfare & sustainability which has held us in good stead as we move into our 4th decade of operations.',
    },
    {
        year: '1987',
        title: 'SKS Hospital',
        body: 'SKS Hospital is Salems’ oldest Multi-speciality hospital. Established in 1987 with 85 beds, today it has over 250 beds offering quality primary, secondary and tertiary care services, across all specialities. They are a super-speciality referral centre for the region with several pioneering firsts, such as the first Renal Transplant and Cardiac Surgery in the region as well as pioneering Endourology and Laparoscopy Surgery in India.',
    },
    {
        year: '1993',
        title: 'VS Educational Trust (VSET)',
        body: 'VS Educational Trust (VSET) was formed by our founders of SKS Hospital as a non-profit organisation in 1993 to provide quality nursing education. VSET has been running the SKS School of Nursing in the premises of SKS Hospital. With extensive hands on training and experience gained our graduates are in demand wherever they go.',
    },
    {
        year: '2005',
        title: 'SKS Automobiles',
        body: 'SKS Automobiles was started in the year 2005 as a 3S dealership in Salem, Tamil Nadu has grown over the years with dealer branches at Hosur, Krishnagiri, Dharmapuri, Namakkal, Tiruchengode and Attur. We cater to new vehicles sales, services, body and paint jobs and spares requirements of Mahindra passenger and commercial range of vehicles.',
    },
];

const panel = 'rounded-3xl bg-[#101d2b]/45 p-7 shadow-card backdrop-blur-xl sm:p-10';
const eyebrow = 'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary';

const About = () => {
    const [activeTab, setActiveTab] = useState('who-we-are');
    const reduce = useReducedMotion();

    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> About Us </h4>
                            <p> <Link to="/"> Home </Link> / About Us </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <SceneStrip subheading="Who We Are" heading="30 Years of Digital Healthcare" height={300} />
            </div>

            {/* --- tabs: a sliding pill rides between the two panels --- */}
            <div className="container pt-10">
                <div
                    role="tablist"
                    aria-label="About Raster Images"
                    className="inline-flex gap-1 rounded-full bg-white/[0.06] p-1.5 backdrop-blur-xl"
                >
                    {TABS.map((t) => {
                        const isActive = activeTab === t.id;
                        return (
                            <button
                                key={t.id}
                                type="button"
                                role="tab"
                                id={`tab-${t.id}`}
                                aria-selected={isActive}
                                aria-controls={`panel-${t.id}`}
                                onClick={() => setActiveTab(t.id)}
                                className="relative rounded-full px-5 py-2.5 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/60 sm:px-7"
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="about-tab-pill"
                                        className="absolute inset-0 rounded-full bg-accent-grad shadow-glow"
                                        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                                    />
                                )}
                                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'}`}>
                                    {t.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="container py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        id={`panel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        initial={reduce ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                        {activeTab === 'who-we-are' ? (
                            <div className="grid gap-6">
                                <Reveal className={panel}>
                                    <span className={eyebrow}>
                                        <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                        Welcome
                                    </span>
                                    <h4 className="mb-5 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                        Welcome To Raster Images
                                    </h4>
                                    <p className="mb-5 max-w-[78ch] leading-[1.85] text-muted-foreground">
                                        Raster Images Private Limited is an Information Services &amp; Technology Company with over 30 years of professional experience, providing software consultancy and solutions to cover the entire continuum of patient care and hospital administration to clients globally. We are involved in several verticals, of which healthcare is our primary focus.
                                    </p>
                                    <p className="max-w-[78ch] leading-[1.85] text-muted-foreground">
                                        Dr. Suresh Viswanathan, a medical doctor with long-standing interests in medical informatics and imaging, started the software development company named Raster Images to pioneer medical imaging in the region over a decade ago. Today Raster Images has matured into a recognised organisation in the IT industry for designing, developing, implementing and training highly technological and innovative solutions for complex problems faced by both the private and public sector. Through market leadership, financial strength and responsible business practices, we demonstrate our enduring capacity to serve any business as key partners. Raster Images has been a “Trusted Adviser” for many medical institutes.
                                    </p>
                                </Reveal>

                                <Reveal className={panel} delay={0.06}>
                                    <span className={eyebrow}>
                                        <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                        Our Work
                                    </span>
                                    <h4 className="mb-5 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                        What We Do?
                                    </h4>
                                    <p className="mb-5 max-w-[78ch] leading-[1.85] text-muted-foreground">
                                        Setting up a fully functional software infrastructure for any medical institute is a daunting process. Another challenge faced by medical institutes is the interoperability enabling seamless data exchange within various departments. At Raster, we believe in the power of open source and interoperability to achieve lower infrastructure cost. Pioneers in PACS, Raster has ventured into the Internet of Medical Things (IoMT) connecting the various medical devices, software applications and healthcare systems and services.
                                    </p>
                                    <p className="max-w-[78ch] leading-[1.85] text-muted-foreground">
                                        Our softwares applications are powerful, flexible, and scalable to meet the needs of any business. We have always been innovators and pioneers, working with great leaders. Our success comes from the continuous faith in the excellence of our products and services, something we are committed to and would never sacrifice. We always strive to exceed our customers’ expectations and meet their requirements. Our customer service, especially in the after sales phase, guarantees the satisfaction of our clients.
                                    </p>
                                </Reveal>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <Reveal className={panel} delay={0.1}>
                                        <span className={eyebrow}>
                                            <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                            Vision
                                        </span>
                                        <p className="text-lg leading-[1.7] text-foreground/90">
                                            As a premier ally, we navigate healthcare&apos;s digital evolution with unparalleled sophistication and unwavering reliability.
                                        </p>
                                    </Reveal>
                                    <Reveal className={panel} delay={0.14}>
                                        <span className={eyebrow}>
                                            <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                            Mission
                                        </span>
                                        <p className="text-lg leading-[1.7] text-foreground/90">
                                            Pioneering bespoke, cost-effective tech solutions for healthcare, we seamlessly integrate cutting-edge global innovations while upholding the highest national and international standards.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        ) : (
                            <div className={panel}>
                                <span className={eyebrow}>
                                    <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                    Since 1987
                                </span>
                                <h4 className="mb-9 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                    Four decades of the SKS Group
                                </h4>
                                <ScrollTimeline items={HISTORY} />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default About;
