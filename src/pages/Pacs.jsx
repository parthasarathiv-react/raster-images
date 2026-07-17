import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';
import AnimatedList from '../components/reactbits/AnimatedList';
import PacsScrollExperience from '../three/PacsScrollExperience';

const SALIENT_FEATURES = [
    'DICOM Standards', 'Vendor Neutral Archive', 'Interoperable', 'HL7 Integration',
    'Scalability', 'Single vendor RIS/PACS Solution', 'Linux based server',
    'Cross platform: Linux / Windows / Mac OS', 'Zero footprint viewer',
    'Support for DAS / SAN / NAS Storage', 'Non-Proprietary lossless compression', 'Audit Log',
    'Multi-monitor support', 'Non-DICOM to DICOM Conversion', 'MPPS', 'Report template designer',
    'Voice recording & Transcription', 'MIS reports', '3rd Party system integration',
    'Mobile Access', 'Teleradiology', 'ECG Waveforms', 'Support for Ophthalmology', 'And much more',
];

const Pacs = () => {
    return (
        <>
            <style>{`.pl-pacs { background-color: #00A87B !important; color: #ffffff !important; }`}</style>
            
            <div className="container-fluid sub-page-heading"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> PACS </h4>
                            <p> <Link to="/"> Home </Link> / Healthcare Solutions / Radiology / PACS </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid xl:px-6">
                <div className="flex flex-col xl:flex-row xl:gap-6">
                    <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

                    <div className="min-w-0 flex-1">

                        <PacsScrollExperience />

                        <div className="row product-desc">
                            <div className="col-md-12 mb-20">

                                <h4 className="mb-15"> Picture Archiving &amp; Communication System </h4>

                                <p> 
                                    If a hospital is to thrive in the health-care marketplace of the future, they have to put a premium on IT investment. Image archives/data storage is increasingly going to be a "must-have." While putting fully operational electronic health records and PACS Enterprise Archives in place remains the top priority for the hospital, adopting a corresponding strategy for management of these systems is an issue to be addressed. Images make up a critical part of the diagnosis process. A comprehensive image exchange reduces administrative workload and enables faster treatment. <br/><br/>		
                                    The data storage system is the heart of the PACS system. A reliable data storage system with a large capacity, which provides immediate access to the entire imaging archive with minimal operator intervention forms the foundation of PACS installation. <br/><br/>
                                    With Raster iPACS, radiologists complete procedures faster, saving time with image access and high-performance loading. Delivering rapid loading of images, Raster iPACS helps to enhance your workflow. Raster iPACS features a variety of applications to master a broad range of clinical challenges and can be tailored to suit your personal preferences. <br/><br/>
                                    Easy to service through low implementation efforts and high remote serviceability. The modular, scalable design of Raster iPACS opens up new possibilities for integration and future growth. With Raster iPACS, protect your investment and save cost through reusing your infrastructure. By deploying Raster iPACS in conjunction with other Raster products and any imaging hardware, you benefit from a single-vendor solution of the highest quality. <br/><br/>
                                </p>

                                <h5> Benefits For Radiologist </h5>

                                <ul>                            
                                    <li> Complete procedures faster, saving time </li>
                                    <li> Fast image access with high loading performance </li>
                                    <li> Quick and easy access to image mark-ups </li>
                                    <li> Robust and intuitive user interface </li>
                                    <li> Personalised tools and display layouts to match individual preferences </li>
                                    <li> Full reading capability through complete feature set, including advanced applications </li>
                                    <li> Low-bandwidth caching and work-list features for off-site comfort with “on-site” performance </li>
                                    <li> Comprehensive work-list filtering including RIS </li>
                                </ul>

                                <h5 className="mt-30"> Salient Features </h5>
                                <p className="mb-15"> Hover or use the arrow keys to browse the full feature set. </p>

                                <AnimatedList
                                    items={SALIENT_FEATURES}
                                    enableArrowNavigation
                                    displayScrollbar
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Pacs;
