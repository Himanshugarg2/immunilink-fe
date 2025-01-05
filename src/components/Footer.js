import React from "react";
import "../App.css"; 
import './Footer.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h5 className="footer-title">Stay Informed</h5>
            <p>Sign up for our newsletter about vaccination updates.</p>
            <form className="form-inline">
              <input
                type="email"
                placeholder="Your Email Address"
                className="form-control mr-sm-2 email-input"
                aria-label="Email"
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-6 text-md-right">
            <h5 className="footer-title">ImmuniLink</h5>
            <p>
              Vaccination Tracker for Children<br />
              Keep track of your child's vaccinations easily.<br />
              <a href="mailto:support@immunilink.com" className="text-white">support@immunilink.com</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className="footer-subtitle">Features</h6>
            <p>Find out how ImmuniLink makes vaccination tracking simple.</p>
          </div>
          <div className="col">
            <h6 className="footer-subtitle">Get Involved</h6>
            <p>Join our community and support child health.</p>
          </div>
          <div className="col">
            <h6 className="footer-subtitle">Support Us</h6>
            <p>Your contributions can help improve child vaccination rates.</p>
          </div>
          <div className="col">
            <h6 className="footer-subtitle">Contact Us</h6>
            <p>We’re here to help you with any inquiries.</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <h6 className="footer-subtitle">About</h6>
            <ul className="list-unstyled">
              <li>Frequently Asked Questions</li>
              <li>ImmuniLink Overview</li>
              <li>Our Mission</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="footer-subtitle">Privacy & Security</h6>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Data Protection</li>
              <li>Terms of Use</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div className="col-md-3 text-md-right">
            <h6 className="footer-subtitle">Follow Us</h6>
            <ul className="list-unstyled d-flex justify-content-end" style={{ gap: '15px' }}>
              <li>
                <a href="https://www.facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" style={{ fontSize: '30px' }}></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" style={{ fontSize: '30px' }}></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" style={{ fontSize: '30px' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="small">&copy; 2024 ImmuniLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
