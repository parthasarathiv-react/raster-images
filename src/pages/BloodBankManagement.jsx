import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const BloodBankManagement = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Blood Bank Management </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Blood Bank Management </p>
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

                  <h4 className="mb-15"> Blood Bank Management </h4>

                  <p> 
                    Blood banks play an important role in the process of collecting blood and managing blood stocks, approving blood requests, updating donations and updating available blood types. Raster’s web-based BBMS will address the issues and problems encountered in collecting information about donors, blood camps, inventories of blood bags, and blood transfusion services, etc, including donor screening, inventory management, blood ordering, blood usage review and compatibility testing. Blood Bank Management system will greatly increase the safety and quality of the blood supply as well as provide logistics data for the optimal supply chain management. <br /><br />
                  </p>

                  <img src="img/products/blood-bank/blood-bank-management-system.jpg" alt="Blood Bank Management System" className="mb-15" />

                  <h5> Features </h5>

                  <div className="row">
                      <div className="col-md-12">
                          <ul>
                              <li> Ensures hospitals have good supply or inventories of blood bags. </li>
                              <li> List the availability of blood bags at any given time. </li>
                              <li> Ability to manage the information of its blood donor. </li>
                              <li> Alerts for blood requirement from registered donors. </li>
                              <li> Auto-check if the person donated blood in the last 3 months. </li>
                              <li> Allows good documentation about the donor and their blood donation activities. </li>
                              <li> Support fast searching to find match blood bags for the right person </li>
                              <li> Effectively manage blood camps </li>
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

export default BloodBankManagement;
