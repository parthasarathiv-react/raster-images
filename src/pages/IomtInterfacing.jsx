import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const IomtInterfacing = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> IoMT Interfacing </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / IoMT Interfacing </p>
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

                        <h4 className="mb-15"> IoMT Interfacing </h4>

                        <p> 
                            Even today, most clinical labs across the country, manually program tests into analysers, manually copy the results into a register and manually transcribe it once again into the LIS. This is inefficient for the labs, yes. But more importantly, it is error-prone and could be dangerous for the patient. <br /><br />
                        </p>
                        
                        <h5> Raster’s IoMT devices </h5>
                        <p> provide direct connectivity and automation by interfacing laboratory analysers and Laboratory Information Systems (LIS) across locations. <br /><br /> </p>
                        <img src="img/products/iomt/iomt-interfacing.jpg" alt="IoMT Interfacing" className="mb-15" />

                        <h5> How Raster's IoMT device works </h5>
                        <img src="img/products/iomt/how-rasters-iomt-device-works.jpg" alt="How Raster's IoMT device works" className="mb-15" />

                        <h5> Features and Benefits </h5>
                        <ul>
                            <li> <strong> Inexpensive </strong> - Raster’s IoMT devices are an efficient and inexpensive alternative to the expensive (and unsuitable) computers that are often used as interfacing equipment. </li>
                            <li> <strong> Adaptable and easy-to-use </strong> - Installing Raster IoMT devices are quick and easy, even if you want to connect multiple instruments across disciplines, sites and LIS. </li>
                            <li> <strong> Power-efficient </strong> - The Raster IoMT box eliminates the need for dedicated PC for interfacing for each analyser, saving power and space, while working reliably 24x7. </li>
                            <li> <strong> Compliant </strong> - All software solutions conform to international standards such as HL7 and ASTM. </li>
                            <li> <strong> Beyond just lab analysers </strong> - Raster IoMT devices can also connect to medical equipment like ventilators and patient monitors in the ICU/NICU and ward to the HIS and EMR. </li>
                            <li> <strong> Platform / Tech-Agnostic </strong> - In our experience, we have worked with nearly all lab information systems and diagnostic equipment manufacuters, making sure out IoMT box serves them all. </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default IomtInterfacing;
