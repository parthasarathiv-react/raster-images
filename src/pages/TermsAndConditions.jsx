import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Terms &amp; Conditions </h4>
                    <p> <Link to="/"> Home </Link> / Terms &amp; Conditions </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container mt-30 pb-30">
        <div className="row">
            <div className="col-md-12" >

                <p className="text-muted mb-15"> Last Updated: 27th March 2025 </p>

                <h5> Introduction </h5>

                <p className="mb-30"> Welcome to raster.in, operated by Raster Images Private Limited. By accessing or using this website and its services, you agree to comply with and be legally bound by the terms and conditions stated herein, along with our Privacy Policy, and any other notices, disclaimers, or additional terms that may be presented in specific sections of this website. <br /><br /> 
                
                These terms apply to all visitors, users, and others who access or use the website. Please read them carefully before proceeding. </p>

                <h5> Entity Definition </h5>

                <p className="mb-30"> 'Raster Images Private Limited', referred to as 'we', 'us', or 'our', operates this website. Our registered office is located at 2nd Floor, #50/1, Brindavan Road, Alagapuram, Salem - 636004, Tamil Nadu, India. <br /><br /> 
                'You' or 'your' refers to any individual or entity using or viewing this website. </p>

                <h5> Terms of Website Use </h5>

                <p> The use of this website is subject to the following terms: </p>

                <ul  className="mb-30">
                    <li> Content is for general informational purposes and may be changed at any time without prior notice. </li>
                    <li> While we strive for accuracy, we do not guarantee completeness or suitability. You acknowledge that some content may be outdated or contain errors. We are not liable for such inaccuracies. </li>
                    <li> Your use of content or services is at your sole discretion and risk. You are responsible for verifying the suitability of any offerings. </li>
                    <li> All design, layout, text, graphics, and other material on this site are either owned by or licensed to us. Unauthorized reproduction or use is strictly prohibited. </li>
                    <li> Third-party trademarks used on this site are acknowledged where applicable. </li>
                    <li> Any unauthorized use may result in a claim for damages and/or constitute a criminal offense. </li>
                    <li> This site may link to external websites for your convenience. We do not endorse or accept responsibility for their content or practices. </li>
                    <li> You may not link to our website without prior written permission. </li>
                    <li> This agreement shall be governed by and construed in accordance with the laws of India. </li>
                </ul>

                <h5> Transaction Disclaimer </h5>

                <p> Raster Images Private Limited shall not be liable for any loss, damage, or inconvenience resulting from the denial of payment authorization for any transaction, including situations where the cardholder has exceeded credit or debit limits established by the issuing bank or mutually agreed with our acquiring bank. All payments are processed securely, and authorization failures are beyond our control.
                </p>

            </div>
        </div>
    </div>
                          
                      

    
        </>
    );
};

export default TermsAndConditions;
