import React from 'react';
import { Link } from 'react-router-dom';

const KioskPrivacyPolicy = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Privacy Policy </h4>
                    <p> <Link to="/"> Home </Link> / Privacy Policy </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container mt-30 pb-30">
        <div className="row">
            <div className="col-md-12">

                <h4> Raster OPD Kiosk Privacy Policy </h4>

                <p>
                    <b> Application: </b> Raster OPD Kiosk <br />
                    <b> Developer: </b> Raster Images Private Limited <br />
                    <b> Effective Date: </b> April 24, 2026 <br />             
                </p>

                <h5 className="mt-5"> 1. Overview </h5>
                <p> OPD Kiosk is a self-service patient registration and appointment booking application used on hospital-managed kiosk devices. <br /><br /> 
                This Privacy Policy describes how the application collects, uses, and shares personal information when users interact with the kiosk. <br /><br /> 
                The application acts solely as an interface between the user and the hospital's backend system. </p>

                <h5 className="mt-5"> 2. Information We Collect </h5>
                <p> During a session, OPD Kiosk may collect the following personal information: </p>

                <h6> 2.1 Personal Identification Information </h6>
                <ul>
                    <li> Full Name </li>
                    <li> Age </li>
                    <li> Gender </li>
                    <li> Date of birth </li>
                </ul>

                <h6> 2.2 Contact Information </h6>
                <ul>
                    <li> Mobile phone number </li>
                    <li> Email address (when provided) </li>
                </ul>

                <h6> 2.3 Patient Identification </h6>
                <ul>
                    <li> UHID (Unique Hospital Identification Number), if available </li>
                </ul>

                <h6> 2.4 Registration Information (for new patients) </h6>
                <ul>
                    <li> Address </li>
                    <li> Guardian name and relationship (if applicable) </li>
                </ul>

                <h6> 2.5 Appointment Information </h6>
                <ul>
                    <li> Selected doctor </li>
                    <li> Department </li>
                    <li> Appointment date and time </li>
                </ul>

                <h6> 2.6 Transaction Information </h6>
                <ul>
                    <li> Payment preference (e.g., Pay at Counter) </li>
                </ul>

                <h5 className="mt-5"> 3. How We Use Information </h5>

                <p> The collected information is used for the following purposes: </p>
                <ul>
                    <li> Patient Identification: To search for existing patient records </li>
                    <li> Patient Registration: To create new patient profiles in the hospital system </li>
                    <li> Appointment Booking: To schedule and confirm appointments </li>
                    <li> Verification: To display entered details for user confirmation before submission </li>
                </ul>

                <h5 className="mt-5"> 4. Data Sharing and Disclosure </h5>
                <p> OPD Kiosk does not sell, rent, or share personal information with third parties. <br /> All collected information is: </p>
                <ul>
                    <li> Shared only with the hospital server configured by the administrator. </li>
                    <li> Used strictly for patient management and appointment processing </li>
                </ul>
                <p> No data is shared with: </p>
                <ul>
                    <li> Advertising services </li>
                    <li> Analytics providers </li>
                    <li> External third-party platforms </li>
                </ul>

                <h5 className="mt-5"> 5. Data Storage and Retention </h5>
                <p> OPD Kiosk follows a no local storage policy for personal data: </p>
                <ul>
                    <li> Personal information is not stored on the device </li>
                    <li> Data exists only during the active session </li>
                    <li> All data is cleared immediately after session completion or timeout </li>
                </ul>
                <p> Stored on Device (Non-Personal Data Only) </p>
                <ul>
                    <li> Server configuration (API URL) </li>
                    <li> Admin PIN (stored as a secure hash) </li>
                    <li> Hospital logo </li>
                </ul>
                <p> This data is encrypted using secure storage mechanisms. </p>

                <h5 className="mt-5"> 6. Data Transmission </h5>
                <p> All data is transmitted: </p>
                <ul>
                    <li> Directly to the hospital server </li>
                    <li> Over secure communication channels (HTTPS/TLS or secure local network) </li>
                </ul>
                <p> The application does not retain or route data through intermediate servers. </p>

                <h5 className="mt-5"> 7. Security Practices </h5>
                <p> We implement appropriate security measures to protect data: </p>
                <ul>
                    <li> Encrypted local storage (AES-256-GCM) for configuration data </li>
                    <li> Secure hashing (SHA-256 with salt) for admin credentials </li>
                    <li> HTTPS/TLS encryption for all network communication </li>
                    <li> No backup of application data to external or cloud storage </li>
                </ul>

                <h5 className="mt-5"> 8. User Data Deletion </h5>
                <p> Since OPD Kiosk does not store personal data locally: </p>
                <ul>
                    <li> No data deletion request is required at the device level </li>
                    <li> All patient data is managed by the hospital system </li>
                </ul>
                <p> Users must contact the respective hospital for: </p>
                <ul>
                    <li> Data access </li>
                    <li> Data correction </li>
                    <li> Data deletion requests </li>
                </ul>

                <h5 className="mt-5"> 9. Children's Privacy </h5>
                <p> OPD Kiosk is not intended for use by children without supervision. </p>
                <ul>
                    <li> Data for minors is expected to be entered by a parent or guardian </li>
                    <li> The application does not knowingly collect data directly from children </li>
                </ul> 

                <h5 className="mt-5"> 10. Session Handling </h5>
                <p> To protect user privacy in a public kiosk environment: </p>
                <ul>
                    <li> Sessions automatically reset after inactivity </li>
                    <li> All entered data is cleared from memory </li>
                    <li> No information is visible to the next user </li>
                </ul>

                <h5 className="mt-5"> 11. Third-Party Services </h5>
                <p> OPD Kiosk does not integrate with third-party SDKs or services that collect personal data. </p>

                <h5 className="mt-5"> 12. Changes to This Privacy Policy </h5>
                <p> We may update this Privacy Policy from time to time. </p>
                <ul>
                    <li> Updates will be reflected by changing the Effective Date </li>
                    <li> Continued use of the application indicates acceptance of the updated policy </li>
                </ul>

                <h5 className="mt-5"> 13. Contact Us </h5>
                <p> 
                    If you have any questions about this Privacy Policy or data practices, contact: <br />
                    Raster Images Private Limited <br />
                    Email: support@raster.in
                </p>

                <h5 className="mt-5"> 14. Compliance Statement </h5>
                <p> This application is designed to comply with: </p>
                <ul>
                    <li> Google Play User Data policies </li>
                    <li> General data protection principles such as data minimisation and purpose limitation </li>
                </ul>
                <p> 
                    The hospital deploying this application is responsible for compliance with applicable healthcare data regulations. <br /><br />
                    Short Play Store Disclosure (for Data Safety Section) <br /><br />
                    You'll need this separately in Play Console: <br /><br />
                    Data Collected:
                </p>
                <ul>
                    <li> Personal info (Name, DOB, Gender) </li>
                    <li> Contact info (Phone number, Email) </li>
                    <li> Health-related info (Appointment details, doctor selection) </li>
                </ul>
                <p> Data Shared: </p>
                <ul>
                    <li> Shared with hospital server only </li>
                </ul>
                <p> Data Storage: </p>
                <ul>
                    <li> Not stored on device </li>
                </ul>
                <p> Data Security: </p>
                <ul>
                    <li> Encrypted in transit </li>
                </ul>

            </div>
        </div>
    </div>
                          
                      

    
        </>
    );
};

export default KioskPrivacyPolicy;
