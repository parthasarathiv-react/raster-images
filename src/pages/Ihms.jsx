import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const Ihms = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> IHMS </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / IHMS </p>
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

                        <h4 className="mb-15"> Integrated Hospital Management System </h4>

                        <p> 
                            Raster iHMS is a hybrid application which boasts of a feature-rich desktop version for transaction entry and a web application for daily stats and dashboard. The EHR/EMR (Electronic Medical Record) is also web-based allowing doctors to securely access patient information literally from anywhere across the globe. <br /><br />

                            Built from free and open source technology, Raster iHMS supports the integration of any third-party application via HL7 messaging. The application is platform-independent and works across all operating systems via, Windows, Mac and Linux. Raster recommends Linux. Clients save lakhs of rupees while implementing Raster iHMS when compared to legacy or any upfront application available in the market without compromising of features and user-friendliness. <br /><br />

                            Raster iHMS is developed for hospitals of all ranges. The application is scalable to handle an entry-level hospital up to an enterprise setup. Modules can be split into multiple servers to handle large transactions when the need arises. Installations can be done with high availability and fail-safe setup for demanding clients. Setting up of disaster recovery and off-site back solutions are available for clients who require high data security. <br /><br />
                        </p>

                        <h5> Benefits For The Management </h5>

                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li> Financially - Better control on finance and management of resources </li>
                                    <li> Control - Better control on the purchase, expenditure and overall day to day affairs </li>
                                    <li> Time - Management saves a lot of time with the built-in dashboard which gives the required projections and analysis </li>
                                    <li> Forecast - With advanced data analysis, management can forecast business </li>                       
                                </ul>
                            </div>
                        </div>

                        <img src="img/products/ihms/raster-ihms.jpg" alt="IHMS" className="mb-15" />

                        <h5> Other Features Include </h5>

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li> Front Office  </li>
                                    <li> OPD, IPD </li>
                                    <li> Claim Management </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li> Ward Management </li>         
                                    <li> OT Management </li>
                                    <li> And many more... </li>                       
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

export default Ihms;
