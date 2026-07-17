import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SceneStrip from '../three/SceneStrip';
import MagicBento from '../components/reactbits/MagicBento';
import Lightbox from '../components/reactbits/Lightbox';

/*
 * Partners — rebuilt as a Magic Bento grid. The old layout relied on a slick
 * carousel initialised from public/js/script.js (jQuery), which this SPA never
 * loads, so the thumbnails used to stack. Here each partner is a self-contained
 * glowing card with the logo, description and a clean thumbnail grid — no
 * external carousel dependency, and no outbound links off the site.
 */

const PARTNERS = [
    {
        title: 'Blackmagicdesign',
        image: '/img/partners/blackmagicdesign.jpg',
        description: 'Broadcast, IP conversion and video routing hardware for professional healthcare AV.',
        thumbs: [
            '/img/partners/blackmagicdesign/blackmagic-2110-ip-converter-3x3g.jpg',
            '/img/partners/blackmagicdesign/blackmagic-2110-ip-converter-4x12g-pwr.jpg',
            '/img/partners/blackmagicdesign/blackmagic-2110-ip-mini-bidirect-12g-sfp.jpg',
            '/img/partners/blackmagicdesign/blackmagic-2110-ip-presentation-converter.jpg',
            '/img/partners/blackmagicdesign/videohub-master-control-pro.jpg',
            '/img/partners/blackmagicdesign/videohub-smart-control-pro.jpg',
        ],
    },
    {
        title: 'Canon India Pvt Ltd.',
        image: '/img/partners/canon.png',
        description: 'Professional photography and cinematography solutions, certified partner cameras and lenses.',
        thumbs: [
            '/img/partners/canon/certificate.jpg',
            '/img/partners/canon/XA75.png',
            '/img/partners/canon/xc15.png',
            '/img/partners/canon/ME20F-SH.png',
            '/img/partners/canon/EOS-R1-body.png',
            '/img/partners/canon/EOS-R8-body.png',
            '/img/partners/canon/EOS-3000D-Kit-EF-S18-55-II.png',
        ],
    },
    {
        title: 'Primera Technology Inc.',
        image: '/img/partners/primera-technology.jpg',
        description: 'Disc publishing, duplication and colour-printing hardware for medical imaging distribution.',
        thumbs: [
            '/img/partners/primera/bravo_4052_blu_disc_publisher.jpg',
            '/img/partners/primera/bravo-se3.jpg',
            '/img/partners/primera/catalyst-v8-074573.jpg',
            '/img/partners/primera/evoLoader.jpg',
            '/img/partners/primera/ip60-2-01.jpg',
            '/img/partners/primera/lx500-color-printer.jpg',
        ],
    },
    {
        title: 'Idenpro',
        image: '/img/partners/idenpro.jpg',
        description: 'Patient identification wristbands and printing solutions for safer hospital workflows.',
        thumbs: [
            '/img/partners/idenpro/Inkjet-wristbands.jpg',
            '/img/partners/idenpro/tm-snap.jpg',
            '/img/partners/idenpro/band.jpg',
            '/img/partners/idenpro/clip-closure.jpg',
        ],
    },
];

const Partners = () => {
    const [lightbox, setLightbox] = useState(null);

    // Build cards here so logo + thumbnails can open the lightbox on click.
    const cardData = PARTNERS.map((p) => ({
        ...p,
        onImageClick: (src) => setLightbox({ src, alt: p.title }),
        footer: (
            <>
                {p.thumbs.slice(0, 4).map((src) => (
                    <img
                        key={src}
                        src={src}
                        alt={`${p.title} product`}
                        loading="lazy"
                        style={{ cursor: 'zoom-in' }}
                        onClick={(e) => { e.stopPropagation(); setLightbox({ src, alt: p.title }); }}
                    />
                ))}
            </>
        ),
    }));

    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Partners </h4>
                            <p> <Link to="/"> Home </Link> / Partners </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-20">
                        <h4 className="mt-25 mb-15"> Our Partners </h4>
                        <p> Great feats are achieved as a team. Business success is the result of the quality of time put in at work. Working closely with our partners, we can share our expertise to provide quick and hassle-free resolutions to your IT problems. Our partners support the best solutions and services possible. </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <SceneStrip subheading="Stronger Together" heading="A Connected Partner Network" />
                    </div>
                </div>

                <div className="row mb-30">
                    <div className="col-md-12">
                        <MagicBento
                            cardData={cardData}
                            gridClassName="bento-grid--uniform"
                            enableStars
                            enableSpotlight
                            enableBorderGlow
                            enableTilt={false}
                            enableMagnetism
                            clickEffect
                            glowColor="95, 166, 255"
                        />
                    </div>
                </div>
            </div>

            <Lightbox
                src={lightbox?.src}
                alt={lightbox?.alt}
                onClose={() => setLightbox(null)}
            />
        </>
    );
};

export default Partners;
