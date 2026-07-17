import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';
import TeleradiologyScrollExperience from '../three/TeleradiologyScrollExperience';

const Teleradiology = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Teleradiology </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Radiology / Teleradiology </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid xl:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-6">

            <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

            <div className="min-w-0 flex-1">

                <TeleradiologyScrollExperience />

                <div className="row product-desc">
                    <div className="col-md-12">

                        <h4 className="mb-15"> Teleradiology </h4>

                        <p> With Raster iPACS Teleradiology module, referrers and radiologists can securely access images and reports from a standard web browser or on a mobile device. Teleradiology allows access to patient data anywhere, at virtually any device. Patient involvement becomes effortless and general practitioners can show images and explain the diagnosis even at home visits. </p>

                        <h5> Benefits </h5>

                        <div className="row mb-20">
                            <div className="col-md-12">
                                <ul>
                                    <li> Teleradiology module allows radiologists to report from remote locations in an effective manner without compromising on patient safety and data security. </li>
                                    <li> Customizable templates makes it possible to deliver high quality reports quickly (low turn around time) by reducing the reporting time. </li>
                                    <li> It can be hosted on a cloud to reduce investment and maintenance of hardware / software costs. </li>
                                    <li> Studies can be automatically assigned based on rules and e-mail / SMS alerts can be sent to the radiologist. And also reports / impression can be sent to patients and referring physicians. </li>
                                    <li> Emergency cases can be marked for Radiologists attention and listed on top of their worklist. Time based one time authentication for referring physicians and second opinions. </li>
                                </ul>
                            </div>
                        </div>

                        <h5> Features </h5>

                        <div className="row mb-20">
                            <div className="col-md-6">
                                <ul>
                                    <li> Intuitive User Interface </li>
                                    <li> Diagnostic Quality HTML5 Viewer </li>
                                    <li> Template Based Reporting </li>
                                    <li> Direct OsiriX launch support </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li> Multilingual Support </li>
                                    <li> Key Image on report </li>
                                    <li> Integrated Workstation </li>
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

export default Teleradiology;
