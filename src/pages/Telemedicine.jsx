import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const Telemedicine = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Telemedicine </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Telemedicine </p>
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

                  <h4 className="mb-15"> Telemedicine </h4>

                  <p> 
                    Telemedicine overcomes geographical barriers to providing healthcare. Doctors can now connect with patients on a more flexible schedule. Telemedicine can improve the quality of care for patients with both medical and mental health conditions. It's beneficial for patients in medically underserved communities and those in rural locations. Video conference gives the flexibility and convenience of seeing patients remotely for consultations, follow-ups, check-ups, and education. Patients love the convenience, flexibility and real-time care with their doctors. Usually, just a quick overview and reassuring words from doctors could save patients hassle, time, and money. Compliance with follow-up calls enables doctors to check in with their patients more frequently to ensure they are following orders. Telemedicine extends doctors hours and increases his availability for urgent care. It’s easy to squeeze a 10-15 minute e-Consultation to address a patient’s query. <br /><br />
                  </p>

                  <img src="img/products/telemedicine/telemedicine.jpg" alt="Telemedicine" className="mb-15" />

                  <h5> Features Of The Mobile Application For Patients </h5>

                  <div className="row">
                      <div className="col-md-12">
                          <ul>
                              <li> Appointment booking </li>
                              <li> Digital payments </li>
                              <li> Prescriptions </li>
                              <li> Investigation orders </li>  
                              <li> Photo uploads </li>
                              <li> Case summary </li>              
                          </ul>
                      </div>
                  </div>

                  <h5 className="mt-30"> Features Of The Web Application For Doctors </h5>
                  
                  <div className="row">
                      <div className="col-md-12">
                          <ul>
                              <li> Appointment schedules </li>
                              <li> Digital patient records </li>
                              <li> Online Prescription </li>
                              <li> Online Investigation Orders </li>  
                              <li> Automatic Patient follow-ups </li>
                              <li> Payment Reports </li>   
                              <li> Online Patient Referrals </li>           
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

export default Telemedicine;
