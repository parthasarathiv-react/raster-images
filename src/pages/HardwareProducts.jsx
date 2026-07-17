import React from 'react';
import { Link } from 'react-router-dom';
import SceneStrip from '../three/SceneStrip';
import HardwareGrid from '../three/HardwareGrid';
import Reveal from '../components/site/Reveal';

const PRODUCTS = [
    { title: 'Professional Cameras', img: '/img/av-solutions/professional-cameras.jpg' },
    { title: 'DaVinci Resolve and Fusion Software', img: '/img/av-solutions/DaVinci-Resolve-and-Fusion-Software.png' },
    { title: 'ATEM Live Production Switchers', img: '/img/av-solutions/ATEM-Live-Production-Switchers.jpg' },
    { title: 'Ultimatte', img: '/img/av-solutions/Ultimatte.jpg' },
    { title: 'Duplication, Disk Recorders and Storage', img: '/img/av-solutions/Duplication-Disk-Recorders-and-Storage.png' },
    { title: 'Capture and Playback', img: '/img/av-solutions/Capture-and-Playback.jpg' },
    { title: 'Cintel Scanner', img: '/img/av-solutions/Cintel-Scanner.jpg' },
    { title: 'Standards Conversion', img: '/img/av-solutions/standard-conversions.jpg' },
    { title: 'Broadcast Converters', img: '/img/av-solutions/broadcast-converters.png' },
    { title: 'Video and Audio Monitoring', img: '/img/av-solutions/Video-and-Audio-Monitoring.png' },
    { title: 'Test Equipment', img: '/img/av-solutions/Test-Equipment.jpg' },
    { title: 'MultiView', img: '/img/av-solutions/multiview.jpg' },
    { title: 'Routing and Distribution', img: '/img/av-solutions/Routing-and-Distribution.jpg' },
    { title: 'Streaming and Encoding', img: '/img/av-solutions/Streaming-and-Encoding.jpg' },
    { title: 'Accessories', img: '/img/av-solutions/Accessories.jpg' },
    { title: 'Cables & Adapters', img: '/img/av-solutions/Cables-and-Adapters.jpg' },
];

const HardwareProducts = () => {
    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Hardware Products </h4>
                            <p> <Link to="/"> Home </Link> / Hardware Products </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <SceneStrip subheading="Built to Connect" heading="Healthcare Hardware & Devices" height={300} />
            </div>

            <div className="container py-5">
                <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                            The Range
                        </span>
                        <h3 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-3xl">
                            Broadcast-grade capture, conversion and routing
                        </h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {PRODUCTS.length} product families
                    </span>
                </Reveal>

                <HardwareGrid items={PRODUCTS} />
            </div>
        </>
    );
};

export default HardwareProducts;
