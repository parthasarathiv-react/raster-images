import React from 'react';
import { Link } from 'react-router-dom';
import ClientIndex from '../components/site/ClientIndex';
import Reveal from '../components/site/Reveal';

/* Names and locations carried over verbatim from the old card grid. Paths are
   now root-absolute — the old relative "img/clients/…" only resolved because
   every client route happens to sit one level deep. */
const CLIENTS = [
    { name: 'AIIMS Hospital', city: 'Delhi', img: '/img/clients/AIIMS.jpg' },
    { name: 'Velammal Hospital', city: 'Madurai', img: '/img/clients/Velammal.jpg' },
    { name: 'Kauvery Hospital', city: 'Chennai', img: '/img/clients/Kauvery.jpg' },
    { name: 'SKS Hospital', city: 'Salem', img: '/img/clients/SKS.jpg' },
    { name: 'Adyar Cancer Institute', city: 'Chennai', img: '/img/clients/adayar-cancer-institute.jpg' },
    { name: 'Air Liquid Medical Systems Pvt Ltd.,', city: 'Chennai', img: '/img/clients/air-liquid-medical-systems.jpg' },
    { name: 'Aishwaryam Speciality Hospital', city: 'Salem', img: '/img/clients/aishwaryam-speciality-hospital.jpg' },
    { name: 'Annai Medical Center', city: 'Kallakkurichi', img: '/img/clients/annai-medical-center.jpg' },
    { name: 'Avanti Medical Diagnostic Center', city: 'Andhra Pradesh', img: '/img/clients/avanti-medical-diagnostic-center.jpg' },
    { name: 'Bharathi Hospital', city: 'Madurai', img: '/img/clients/bharathi-hospital.jpg' },
    { name: 'Big Pictures', city: 'Australia', img: '/img/clients/big-picture.jpg' },
    { name: 'Blossom Health care center', city: 'Afganistan', img: '/img/clients/blossom-health-care-center.jpg' },
    { name: 'Booma hospital', city: 'Madurai', img: '/img/clients/booma.jpg' },
    { name: 'Care 24 Hospital', city: 'Salem', img: '/img/clients/care-24-logo.jpg' },
    { name: 'Chennai National Hospital', city: 'Chennai', img: '/img/clients/chennai-national-hospital.jpg' },
    { name: 'City Laboratory', city: 'Afganistan', img: '/img/clients/city-laboratory.jpg' },
    { name: 'Deepam Hospital', city: 'Valapadi', img: '/img/clients/deepam-hospital.jpg' },
    { name: 'Dharan Hospital', city: 'Salem', img: '/img/clients/dharan-hospital.jpg' },
    { name: 'EKA Hospital', city: 'Salem', img: '/img/clients/eka-hospital.jpg' },
    { name: 'G L Hospital', city: 'Salem', img: '/img/clients/gl-hospitals.jpg' },
    { name: 'Geeth Raghunath Hospital', city: 'Attur', img: '/img/clients/geeth-ragunath.jpg' },
    { name: 'Global Ortho Hospital', city: 'Coimbatore', img: '/img/clients/global-ortho-hospital.jpg' },
    { name: 'Gokul Scans', city: 'Thiruvallur', img: '/img/clients/gokul-scans.jpg' },
    { name: 'Jaai Dev Hospital', city: 'Salem', img: '/img/clients/jaaidev-hospital.jpg' },
    { name: 'Jeevan Samyuktha Hospital', city: 'Chennai', img: '/img/clients/jeevan-samyuktha-hospital.jpg' },
    { name: 'J P N Trauma Centre', city: 'New Delhi', img: '/img/clients/jpn.jpg' },
    { name: 'Karthick Medical Centre', city: 'Edapadi', img: '/img/clients/kmc.jpg' },
    { name: 'Medwin Hospital', city: 'Coimbatore', img: '/img/clients/medwin-hospital.jpg' },
    { name: 'Mithra Scans', city: 'Salem', img: '/img/clients/mithra-scans.jpg' },
    { name: 'Mother Ortho Vission', city: 'Salem', img: '/img/clients/mother-ortho-vission.jpg' },
    { name: 'Namakkal Scans', city: 'Namakkal', img: '/img/clients/namakkal-scans.jpg' },
    { name: 'Neuro Foundation', city: 'Salem', img: '/img/clients/neuro-foundation.jpg' },
    { name: 'NIH', city: 'Kolkatta', img: '/img/clients/nih.jpg' },
    { name: 'Pixel Scans', city: 'Trichy', img: '/img/clients/pixel-scans.jpg' },
    { name: 'Preethi Hospital', city: 'Madurai', img: '/img/clients/preethi-hospital.jpg' },
    { name: 'Putra Medical Centre', city: 'Malaysia', img: '/img/clients/putra-medical-centre.jpg' },
    { name: 'Rainbow Hospital', city: 'Salem', img: '/img/clients/rainbow-hospital.jpg' },
    { name: 'Ramalingam Hospital', city: 'Salem', img: '/img/clients/ramalingam-hospital.jpg' },
    { name: 'Revathi Hospital', city: 'Salem', img: '/img/clients/revathi-hospital.jpg' },
    { name: 'Revathi Medical Centre', city: 'Ooty', img: '/img/clients/revathi-medical-centre.jpg' },
    { name: 'Royal Care Hospital', city: 'Coimbatore', img: '/img/clients/royal-care.jpg' },
    { name: 'Royal Hospital', city: 'Afganistan', img: '/img/clients/royal-hospital.jpg' },
    { name: 'SR Multispeciality Hospital', city: 'Chennai', img: '/img/clients/sr-multispeciality-hospital.jpg' },
    { name: 'SS Medical Centre', city: 'Salem', img: '/img/clients/ss-medical-centre.jpg' },
    { name: 'SPMM Hospital', city: 'Salem', img: '/img/clients/spmm-hospital.jpg' },
    { name: 'Springfield Wellnes Centre', city: 'Chennai', img: '/img/clients/springfield-wellnes-centre.jpg' },
    { name: 'Sri Chandra Sekara Hospital', city: 'Hosur', img: '/img/clients/sri-chandra-sekara-hospital.jpg' },
    { name: 'Sri Hospital', city: 'Chennai', img: '/img/clients/sri-hospital.jpg' },
    { name: 'Sri Ramakrishna Mission Dispensary', city: 'Salem', img: '/img/clients/sri-ramakrishna-mission-dispensary.jpg' },
    { name: 'Sri Shellappa Hospital', city: 'Salem', img: '/img/clients/sri-shellappa-hospital.jpg' },
    { name: 'SS Medical Foundation', city: 'Salem', img: '/img/clients/ss-medical-centre.jpg' },
    { name: 'Sumathi Hospital', city: 'Viluppuram', img: '/img/clients/sumathi-hospital.jpg' },
    { name: 'Thiru Hospital', city: 'Salem', img: '/img/clients/thiru-neuro.jpg' },
    { name: 'Uni-scans', city: 'Hosur', img: '/img/clients/uni-scans.jpg' },
    { name: 'Vydehi Institute of Medical Science and Research Center', city: 'Bangalore', img: '/img/clients/vayu-clinic.jpg' },
    { name: 'Voluntary Health Services', city: 'Chennai', img: '/img/clients/voluntary-health-services-multispeciality-hospitals.jpg' },
    { name: 'Women Centre', city: 'Coimbatore', img: '/img/clients/women-centre.jpg' },
    { name: 'RML Hospital', city: 'Delhi', img: '/img/clients/rml-hospital.jpg' },
];

const Clients = () => {
    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Clients </h4>
                            <p> <Link to="/"> Home </Link> / Clients </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5">
                    <div className="max-w-2xl">
                        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                            Our Clients
                        </span>
                        <h4 className="mb-4 text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-3xl">
                            Trusted across hospitals, labs and imaging centres
                        </h4>
                        <p className="leading-[1.8] text-muted-foreground">
                            Our team of talented experts provide the best customer experience/service and we let our customers do the marketing for us through word of mouth.
                        </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {CLIENTS.length} institutions
                    </span>
                </Reveal>

                <ClientIndex items={CLIENTS} />
            </div>
        </>
    );
};

export default Clients;
