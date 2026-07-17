import React from 'react';
import { Link } from 'react-router-dom';
import SceneStrip from '../three/SceneStrip';

const ContactUs = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Contact Us </h4>
                    <p> <Link to="/"> Home </Link> / Contact Us </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container">
        <SceneStrip subheading="Let's Talk" heading="Get in Touch With Raster" height={300} />
    </div>

    <div className="container contact-us">

        <div className="row head-office">
            <div className="col-md-12">
                <h5 className="mb-15"> Head Office </h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15629.331768890508!2d78.1439058!3d11.6707999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4538c72dfcdace14!2sRaster%20Images%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1585544446967!5m2!1sen!2sin" frameborder="0"  allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
                <p className="mt-15"> 2<sup>nd</sup> &amp; 3<sup>rd</sup> Floor, AKM Complex, No. 29, Brindavan Road, 4<sup>th</sup> Cross, Kailash Nagar, Fairlands, Salem - 636016, TN </p>
                <span className="contact-mobile mr-20"> <i className="raster-icon icon-phone"></i> +91 427 4033100 </span>
                <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:Info@raster.in" target="_top"> Info@raster.in </a> </span>
            </div>
        </div>

        <div className="row reg-office">
            <div className="col-md-12">
                <h5 className="mb-15"> Reg. Office </h5>
                <p className="mt-15"> 54, Brindavan Road, Alagapuram, Salem - 636004. Tamil Nadu, India. </p>
            </div>
        </div>

        <div className="row business-team">
            <div className="col-md-4">
                <h6 className="mt-30"> Gowthaman R </h6>
                <p className="mb-20"> Business Development Manager </p>
                <span className="contact-mobile"> <i className="raster-icon icon-phone"></i> +91 77085 99111 </span>
                <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:gowthaman.r@raster.in" target="_top"> gowthaman.r@raster.in </a> </span>
            </div>
            <div className="col-md-4">
                <h6 className="mt-30"> Krishna Kumar L </h6>
                <p className="mb-20"> Business Development Manager (South) </p>
                <span className="contact-mobile"> <i className="raster-icon icon-phone"></i> +91 95666 27733 </span>
                <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:krishnakumar.l@raster.in" target="_top"> krishnakumar.l@raster.in </a> </span>
            </div>
            <div className="col-md-4">
                <h6 className="mt-30"> Magudeshwaran S </h6>
                <p className="mb-20"> Business Executive </p>
                <span className="contact-mobile"> <i className="raster-icon icon-phone"></i> +91 95665 00333 </span>
                <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:magudeshwaran.s@raster.in" target="_top"> magudeshwaran.s@raster.in </a> </span>
            </div>
            {/*  <div className="col-md-4">
                <h6 className="mt-30"> Anita T </h6>
                <p className="mb-20"> HR Manager </p>
                <span className="contact-mobile"> <i className="raster-icon icon-phone"></i> +91 73392 24488 </span>
                <span className="contact-email"> <i className="raster-icon icon-email"></i> <a href="mailto:hr@raster.in" target="_top"> hr@raster.in </a> </span>
            </div>  */}
        </div>

        <div className="row branch-office">
            <div className="col-md-12 mb-15"> <h5> Branch Offices </h5> </div>
            {/*  <div className="col-md-4">
                <h6> India - Coimbatore </h6>
                <p> SA-121, Block-1, 2<sup>nd</sup> Floor, <br /> Jains Appartment, Avinashi Road, <br /> Coimbatore - 641 004, <br /> Tamilnadu, India </p>
                <p> No 1327, 2<sup>nd</sup> Floor, Majestic Building, <br /> Esso Bunk Signal, Avinashi Road, <br /> Peelamedu, Coimbatore - 641 004, <br /> Tamil Nadu, India </p>
            </div>  */}
            <div className="col-md-4">
                <h6> India - Delhi </h6>
                <p> F-21, Second Floor, Sector 12, <br /> Noida - 201 301, <br /> Delhi, India </p>
            </div>
            <div className="col-md-4">
                <h6> Malaysia </h6>
                {/*  <p> #7A, 2<sup>nd</sup> Floor, Jalan 52/10, <br /> PJ New Town, Selangor, <br /> Petaling Jaya - 46200, Malaysia. </p>  */}
                <p> No: 37 Jalan BP 7/12 <br /> Bandar Bukit <br /> 47120 Puchong Selangor <br /> Malaysia </p>
            </div>
        </div>

        <form name="contact" method="post">

            <div className="row get-in-touch">
                <div className="col-md-12 mb-15"> <h5> Get In Touch </h5> </div>

                <span id="mail_success" className="success mb-15">Thank you. Your message has been sent.</span>
                <span id="mail_failed" className="error mb-15"> Error, email not sent </span>
                
                <div className="col-md-4 mt-10">
                    <label> Name * </label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Full Name" />
                    <div id="error_name" className="error">Please Enter Valid Name</div>
                </div>
                <div className="col-md-4 mt-10">
                    <label> Mobile Number * </label>
                    <input type="text" name="mobile" id="mobile" placeholder="Enter Your Mobile Number" />
                    <div id="error_mobile" className="error">Please Enter Valid Mobile No.</div>
                </div>
                <div className="col-md-4 mt-10">
                    <label> E-mail ID * </label>
                    <input type="text" name="email" id="email" placeholder="Enter Your E-mail ID" />
                    <div id="error_email" className="error">Please Enter Valid E-mail</div>
                </div>
                <div className="col-md-12 mt-10">
                    <label className="mt-15"> Message * </label>
                    <textarea name="message" id="message" placeholder="Enter your comment about what you to enquire" rows="4"></textarea>
                    <div id="error_message" className="error">Min. 5 Characters Required</div>
                </div>
                <div className="col-md-12 text-right mt-20">
                    <button type="button" className="btn btn-primary btn-lg" id="contact"> Submit </button>
                </div>
            </div>
        </form>

    </div>

    
        </>
    );
};

export default ContactUs;
