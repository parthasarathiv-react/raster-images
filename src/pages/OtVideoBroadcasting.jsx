import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Expand } from 'lucide-react';
import ProductSidebar from '../components/ProductSidebar';
import Lightbox from '../components/reactbits/Lightbox';

const GALLERY = [
    ['img/products/otvb/gallery/Vydehi-Medical-College.webp', 'img/products/otvb/gallery/thumb/Vydehi-Medical-College.jpg', 'Vydehi Medical College'],
    ['img/products/otvb/gallery/St-Marys-Hospital.webp', 'img/products/otvb/gallery/thumb/St-Marys-Hospital.jpg', "St Mary's Hospital"],
    ['img/products/otvb/gallery/St-Marys-Hospital-2.webp', 'img/products/otvb/gallery/thumb/St-Marys-Hospital-2.jpg', "St Mary's Hospital"],
    ['img/products/otvb/gallery/Dr-Shilpa-OT.webp', 'img/products/otvb/gallery/thumb/Dr-Shilpa-OT.jpg', 'Dr Shilpa OT'],
    ['img/products/otvb/gallery/ACU-BG-Nara.webp', 'img/products/otvb/gallery/thumb/ACU-BG-Nara.jpg', 'ACU BG Nara'],
];

const OtVideoBroadcasting = () => {
    const [lightbox, setLightbox] = useState(null);
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> OT - Video Broadcasting </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / OT - Video Broadcasting </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid xl:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-6">

            <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

            <div className="min-w-0 flex-1">
                <div className="row product-desc">
                    <div className="col-md-12 mb-20">

                        <h4 className="mb-15"> OT - Video Broadcasting </h4>

                        <p> 
                            Digital video recordings are increasingly used across various medical and surgical disciplines for documentation for medical-legal cases, educational purposes, scientific presentations and publications. Raster OT Broadcast system is designed to be installed in operating theatres, conference halls and doctors’ offices and makes it possible to send multiple High Definition (HD) video streams coming from cameras, microscopes, endoscopes and other medical equipment. With its central video &amp; image management system, it simplifies the acquisition of audio, video and multiple images, with simultaneous recording, storing, streaming, monitoring and control. Designed to support greater scale to education and remote collaboration tool for medical professionals allowing real-time audio-video communication and for the usage of specialised medical services. <br /><br />
                            Raster’s OT Broadcast is your choice when you need the best possible solution that has wide availability, scalability and performance when streaming video. Raster’s OT Broadcast is highly scalable and makes financial sense since you do not pay for additional servers and hardware or routing, should your network traffic increase or decrease. It can support future equipment upgrades. Advantages of Raster’s OT Broadcast are its flexibility, reliability, and open model which makes it the right choice for your operation theatre. <br /><br />
                        </p>

                        <h5> Schematic Diagram </h5>
                        <img src="img/products/otvb/operation-theatre-video-broadcasting.jpg" alt="Operation Theatre Video Broadcasting" className="mb-15" />

                        <h5> Other Features </h5>

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li> Tailored to fit your needs  </li>
                                    <li> Optional display sizes and technology </li>
                                    <li> Variety of inputs and outputs </li>
                                    <li> All contained in wall or on wall </li>
                                    <li> “Zero Footprint” deployment </li>
                                    <li> Touch screen controls </li>
                                    <li> Display and capture all the sources in the Operating Theatre  </li>
                                    <li> Collaborative work on DICOM images  </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li> Video Streaming &amp; Recordings  </li>
                                    <li> High Definition  </li>                       
                                    <li> User-friendly </li>
                                    <li> Increased functionality </li>
                                    <li> Convenient system operations </li>
                                    <li> Live preview of images </li>
                                    <li> Easy data exchange </li>
                                </ul>
                            </div>                            
                        </div>

                        <h5 className="mt-30"> Benefits </h5>

                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li> Simultaneous recording of videos, sound and still images via analogue and digital signals (SD or HD) </li>
                                    <li> Storage in PACS, SAN, NAS, USB stick or burn on CD / DVD </li>
                                    <li> Export in multiple formats or DICOM format </li>
                                </ul>
                            </div>
                        </div>


                        <h5 className="mt-30"> Connectivity </h5>
                        <img src="img/products/otvb/operation-theatre-device-connectivity.jpg" alt="Operation Theatre Device Connectivity" className="mb-15" />

                        <p> 
                            <strong> Notes: </strong> For Hospitals and Medical College, there is a need to provide training programs and conferences for students and doctors. Operation theatres equipped with Raster video management system enables live viewing and recording of all surgical events.
                        </p>

                        <h5 className="mt-30 mb-15"> Gallery </h5>
                        <p className="mb-15"> A look at Raster OT Broadcast installed across operating theatres. Click any image to view it full-size. </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
                            {GALLERY.map(([full, thumb, alt], i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setLightbox({ src: '/' + full.replace(/^\//, ''), alt })}
                                    className={`group relative overflow-hidden rounded-2xl bg-white/[0.04] shadow-[0_18px_50px_-26px_rgba(0,0,0,0.8)] ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                                >
                                    <img
                                        src={'/' + thumb.replace(/^\//, '')}
                                        alt={alt}
                                        loading="lazy"
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${
                                            i === 0 ? 'h-56 md:h-full' : 'h-40 md:h-full'
                                        }`}
                                    />
                                    {/* gradient scrim + caption */}
                                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010a25]/85 via-[#010a25]/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
                                    <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                                        <span className="translate-y-1 text-left text-xs font-semibold leading-tight text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                                            {alt}
                                        </span>
                                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/90 text-primary-foreground opacity-0 shadow-glow transition-all duration-300 group-hover:opacity-100">
                                            <Expand className="h-4 w-4" />
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
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

export default OtVideoBroadcasting;
