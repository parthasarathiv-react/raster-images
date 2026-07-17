import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const ElectronicCharting = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Electronic Charting </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Electronic Charting </p>
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

                    <h4 className="mb-15"> Electronic Charting </h4>

                    <p> 
                    Electronic Charting is designed on the principle of communicating with devices on the centralised remote monitoring principle and instantaneous decision support system. This methodology of ICU monitoring ensures minimum healthcare workers presence inside the ICU specially designed for isolated patient scenarios. The centralised monitoring ensures the least footprint of nursing staff/doctors in ICU maintaining social distancing and reduced fatigue. This also ensures a minimum number of healthcare workers come in physical proximity of patients reducing the risk of infection. Electronic Charting comes with a unique capability of collecting instantaneous inline data from ventilators and monitors via our Internet of Medical Things device. (IoMT) connects and collects the information from patient connected devices.  <br /><br />

                      The devices that can be connected to Raster IoMT
                    </p>

                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li> Ventilators </li>
                                <li> Syringe Pumps </li>
                            </ul>
                        </div>
                    </div>

                    <img src="img/products/electronic-charting/electronic-charting.jpg" alt="Electronic Charting" className="mb-15" />

                  </div>
                </div>

              </div>

        </div>
    </div>

    
        </>
    );
};

export default ElectronicCharting;
