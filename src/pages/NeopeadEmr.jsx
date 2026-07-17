import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const NeopeadEmr = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Neopead EMR &amp; Charting </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Neopead EMR &amp; Charting </p>
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

                        <h4 className="mb-15"> Neopead EMR &amp; Charting </h4>

                        <p> 
                            Your paperless medical practice is here! <br /><br />
                            Created by "Doctors For Doctors" <br /><br />
                        </p>                    

                        <h5> Existing Features <span> (Current Version 2) </span> </h5>
                        <ul>
                            <li> Electronic baby registration, admission records, daily ward round entries, digital entry of neonatal problems and nurses data entry made easy with in built intelligent navigation </li>
                            <li> Data entry made easy and error free by enhanced user interface and automated pre-filled field menus with options to choose </li>
                            <li> Scalable layouts - ease of use with PCs, laptops, tablets and mobile phones </li>
                            <li> Instantly generated NICU and postnatal discharge summaries, OP consultation records and scan reports </li>
                            <li> Automated plotting of growth charts </li>
                            <li> Salient Neonatal and Paediatric Calculators  </li>
                            <li> One - step generation of weekly, monthly and annual reports with provisions to compare different time periods </li>
                            <li> Advanced search features including combination searches to assist physicians with audits and research </li>
                        </ul>
                        <h5 className="mt-30"> Upcoming Features <span> (Version 3 will be out soon) </span> </h5>
                        <ul>
                            <li> Automated data capture from monitors, ventilators, syringe pumps and other devices </li>
                            <li> Automated data capture would significantly reduce doctor’s and nurse’s data entry time - No more vitals observation paper charts </li>
                            <li> Graphical timeline display of all vital parameters and clinical observations </li>
                            <li> Integration with Hospital laboratory and imaging systems </li>
                            <li> Benchmark your practice with other participating National and International hospitals by health quality indicators </li>
                            <li> Algorithms to avoid clinical untoward incidences -Patient safety initiative </li>
                            <li> Research tool for future validation and implementation - Predictive algorithms to forecast clinical deterioration </li>
                            <li> Will be compliant with Indian Government’s digital information security in health care act 2018 </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default NeopeadEmr;
