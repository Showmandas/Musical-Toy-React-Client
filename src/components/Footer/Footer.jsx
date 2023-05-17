import React from 'react';
import logo from '../../assets/images/logo.png'


function Footer(){
  return (
    <footer className="footer mt-5 container-fluid p-5">
      <div className="footer-content row">
        <div className="footer-logo col-lg-4 col-12 mb-3">
          <img src={logo} alt="Website Logo" className='img-fluid rounded-circle mb-3' id='footerLogo' />
          <h3> Musical Toy</h3>
        
        <div className="footer-contact mt-4">
          <h4>Contact Information</h4>
          <p>Email: musicaltoys@gmail.com</p>
          <p>Phone: 123-344-2340</p>
        </div>
        </div>
        <div className="footer-social col-lg-4 col-12 my-5 mb-3">
          <h4>Follow Us</h4>
          <div className="social-icons d-flex mt-3 gap-4">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="footer-address col-lg-4 col-12 my-5 mb-3">
          <h4>Our Address</h4>
          <p> Chattogram, Bangladesh</p>
        </div>
      </div>

      <div className="footer-bottom mt-5 text-center">
        <p>&copy; {new Date().getFullYear()} Musical Toy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
