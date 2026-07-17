import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <>
            <div className="container-fluid sub-page-heading"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Careers </h4>
                            <p> <Link to="/"> Home </Link> / Careers </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-20">
                        <h4 className="mt-25 mb-15"> Join our amazing team </h4>
                        <p> We are always on the lookout for talented individuals to join our growing team. We at Raster, are looking for dynamic candidates who would love to work in the ever-demanding field of healthcare informatics. You can expect nothing less than our total commitment to your career development. </p>
                    </div>
                </div>

                <div className="row career-no-vacant mb-30">
                    <div className="col-md-12">
                        <p> Thank you for visiting us. Currently, there are no positions vacant. We will be posting all jobs as they become available on this page, so please continue to re-visit our website for information on available jobs. However, we are always keen to meet energetic and talented professionals who would like to join our team. If you wish to be considered for any future positions, please send your resume and covering letter to <a href="mailto:careers@raster.in"> careers@raster.in </a></p>
                    </div>
                    <div className="col-md-12">
                        <h6 className="mt-10"> Anita T <small>(HR Manager)</small></h6>
                        <p className="mb-20"> <span className="contact-mobile mr-20"> <i className="raster-icon icon-phone"></i> +91 73392 24488 </span> <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:hr@raster.in" target="_top"> hr@raster.in </a> </span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Careers;
