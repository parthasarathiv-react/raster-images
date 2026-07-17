import React from 'react';
import { Link } from 'react-router-dom';

const CancellationAndRefundPolicy = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Cancellation &amp; Refund Policy </h4>
                    <p> <Link to="/"> Home </Link> / Cancellation &amp; Refund Policy </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container mt-30 pb-30">
        <div className="row">
            <div className="col-md-12" >

                <p className="mb-5"> No cancellations &amp; Refunds are entertained </p>

            </div>
        </div>
    </div>
                          
                      

    
        </>
    );
};

export default CancellationAndRefundPolicy;
