import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const DicomBurner = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Dicom Burner </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Radiology / Dicom Burner </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid xl:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-6">

            <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

            <div className="min-w-0 flex-1">
                <div className="row product-desc">
                    <div className="col-md-12">

                        <h4 className="mb-15"> Dicom Burner </h4>

                        <p> 
                            <img src="img/products/dicom-burner/dicom-burner.jpg" alt="Dicom Burner" className="float-right mtb-10 ml-15" />
                            Raster CD/DVD DICOM Burner is an easy to use disc recorder that concurrently records and labels CDs and DVDs on demand. Raster DICOM Burner has advanced robotics which comes with a user-friendly touch screen interface. Equipped with dual CD/DVD drives and a built-in colour printer. Raster DICOM Burner seamlessly records patient information, reports and DICOM images to the CD/DVD while at the same time automatically labelling the disc with the facility logo and study descriptions. Raster DICOM Burner is capable of processing multiple jobs simultaneously. With the embedded DICOM viewer, recipients can access the contents from any standard PC.  
                        </p>     

                        <h5 className="mt-30"> Features </h5>

                        <div className="row mb-20">
                            <div className="col-md-6">
                                <ul>
                                    <li> Intuitive Touch Screen Interface </li>
                                    <li> Advanced Robotics for automation </li>
                                    <li> Customisable modality-specific labels </li>
                                    <li> In-built DICOM viewer </li>
                                    <li> Easy to use interface, no training required </li>
                                    <li> Intuitive touchscreen option turns novices into expert users in minutes  </li>
                                    <li> Visual selection of studies </li>
                                    <li> Integrates with PACS, imaging modalities or viewer </li>
                                    <li> Remote server query &amp; retrieval </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li> Create custom labels </li>
                                    <li> Cost-effective portable media solution </li>
                                    <li> Built-in DICOM viewer to read and reconcile </li>
                                    <li> No user intervention required </li>
                                    <li> Job scheduler for uninterrupted recording of studies </li>
                                    <li> Industry standards including DICOM Part 10 </li>
                                    <li> Audit Log </li>
                                    <li> Remote administration through the web interface </li>
                                    <li> Supports Blu-ray </li>
                                </ul>
                            </div>                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default DicomBurner;
