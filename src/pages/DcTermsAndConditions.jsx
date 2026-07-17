import React from 'react';
import { Link } from 'react-router-dom';

const DcTermsAndConditions = () => {
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
            <div className="col-md-12">

                <h4> Terms &amp; Conditions for DICOM Camera iOS App </h4>

                <p className="text-muted mb-15"> Last Updated: 15th August 2023 </p>

                <p> Welcome to the DICOM Camera iOS App ("App"). These Terms of Use ("Terms") govern your use of the App. By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App. <br /><br /> </p>

                <h5> 1. Acceptance of Terms </h5>
                <p> By using the App, you acknowledge that you have read, understood, and agreed to these Terms. If you are using the App on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms. <br /><br /> </p>

                <h5> 2. Description of the App </h5>
                <p> The DICOM Camera App allows users to capture patients images. With DICOM Camera, medical professionals can rely on a versatile and user-friendly solution to capture and manage medical images efficiently, improving patient care, and enhancing the overall healthcare experience. Enhance your clinical practice with the power of DICOM Camera. Empower healthcare providers with a portable, efficient, and secure solution for capturing and managing medical images, fostering collaboration, and improving patient care <br /><br /> </p>

                <h5> 3. User Conduct and Responsibilities </h5>
                <ul>
                    <li> You agree to use the App in compliance with all applicable laws and regulations. </li>
                    <li> You are responsible for maintaining the security of your account and all actions taken through your account. </li>
                    <li> You shall not use the App for any unlawful, harmful, or unethical purposes. <br /><br /> </li>
                </ul>

                <h5> 4. Privacy </h5>
                <p> Your use of the App is also governed by our <Link to="/privacy-policy"> Privacy Policy </Link> <br /><br /> </p>

                <h5> 5. Intellectual Property </h5>
                <p> The App and its content, including but not limited to text, graphics, images, and software, are the property of Raster Images Private Limited or its licensors and are protected by intellectual property laws. <br /><br /> </p>

                <h5> 6. User Content </h5>
                <p> By uploading or sharing content on the App, you grant Raster Images Private Limited a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content for the purpose of providing the App's services. <br /><br /> </p>

                <h5> 7. Termination </h5>
                <p> Raster Images Private Limited reserves the right to suspend or terminate your access to the App at its sole discretion, without notice, for any reason, including but not limited to a breach of these Terms. <br /><br /> </p>

                <h5> 8. Disclaimers and Limitation of Liability </h5>
                <ul>
                    <li> The App is provided "as is" without any warranties. </li>
                    <li> Raster Images Private Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of the App. <br /><br /> </li>
                </ul>

                <h5> 9. Governing Law and Jurisdiction </h5>
                <p> These Terms are governed by and construed in accordance with the laws of Indian jurisdiction. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Salem Jurisdiction. <br /><br /> </p>

                <h5> 10. Changes to Terms </h5>
                <p> Raster Images Private Limited reserves the right to modify these Terms at any time. Updated versions of the Terms will be posted within the App. Your continued use of the App after any changes signifies your acceptance of the revised Terms. <br /><br /> </p>


            </div>
        </div>
    </div>
                          
                      

    
        </>
    );
};

export default DcTermsAndConditions;
