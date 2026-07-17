import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const PharmacyManagement = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Pharmacy Management </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Pharmacy Management </p>
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

                    <h4 className="mb-15"> Pharmacy Management </h4>

                    <p> 
                      One of the most amazing features of Raster PMS is dealing with inventory. Managing inventory ideally can help reduce issues such as ineffective management, excess stocking of material, pilferages and other inventory-related issues. When inventory is automatically tracked, there is no requirement of employing additional labour to do a similar job. It thus saves additional expenses. <br /><br />

                      Pharmacy Management Software streamlines the drug supply and stock management with detailed information. Automation techniques are deployed toward efficient inventory management through the incorporation of barcodes that meet compliance requirements. Inventory processes are built with efficiency through process-flow automation of stocking of inventory balances, monitoring and tracking, warehouse stock levels, and sales updates.  The entire process of managing inventory is accelerated and increased in terms of productivity. <br /><br />

                      This e-prescribing procedure empowers the entire process flow of the pharmacy’s system and increases patient satisfaction due to error-free dispensing and billing. <br /><br />
                    </p>

                    <h5> Features </h5>

                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li> Support for search using codes </li>
                                <li> Maintain inventory in batches via FIFO, LIFO, expiry of products and manual selection of batches </li>
                                <li> Alerts on inventory level </li>
                                <li> Effective stock management with 2 level checks </li>  
                                <li> Reporting of stock inventory </li>                     
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

export default PharmacyManagement;
