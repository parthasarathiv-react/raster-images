import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const Emr = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> EMR </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / EMR </p>
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

                    <h4 className="mb-15"> Electronic Medical Record </h4>

                    <p> 
                      Always prefer an EMR that supports standards and interoperability. An effective EMR should be one that gives you meaningful reimbursement. Apart from the doctors and staffs, your patients should also be actively involved in the usage of the EMR. The EMR system should facilitate better workflow and improve the quality of patient care and patient safety. The on-demand patient record should be the prime focus of an EMR. Raster’s EMR provides comprehensive, clearly written, case summaries, e-prescriptions and investigation orders and others. <br /><br />
                    </p>

                    <div className="row mb-20">
                        <div className="col-md-12">
                            <ul>
                                <li> Doctors can access patient data, such as diagnoses, allergies, lab results, and medications. </li>
                                <li> Access to new and past test results among fellow doctors in multi speciality hospital. </li>
                                <li> Secure electronic communication for both doctors and patients. </li>
                                <li> Patient access to health records, disease management tools, and health information resources. </li>
                                <li> Standards-based electronic data storage and reporting for patient safety. </li>
                            </ul>
                        </div>
                    </div>

                    <p>
                      Raster’s SNOMED CT embedded in EMR works behind the scenes to support the encoding of clinical information in a meaningful way. SNOMED CT enables the following <br /><br />
                    </p>

                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li> Improvements in the quality of data available to doctors and the measurement of clinical outcomes </li>
                                <li> Improvements in the completeness, accuracy, and consistency of health record documentation </li>
                                <li> Development of richer computer-aided clinical alert and reminder systems, with the greater detail available </li>
                                <li> Improved critical care monitoring via the Raster’s IIMMS such as vital signs, symptoms, medications and interventions </li>
                                <li> Improved communication among doctors because the SNOMED CT concepts are defined  </li>
                                <li> Increased efficiency and consistency in clinical data collection </li>
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

export default Emr;
