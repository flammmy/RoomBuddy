import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import imgbackground from "../Images/about2.jpg";


import contactImage from "../Images/contact.png";
import Header from "../Common/Header";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";

const headerText = "Contact";


const Contact = () => {
  return (
    <>
      <Header />
      <HeroPage imageUrl={imgbackground} headerText={headerText} />
      <div className="contact-container "  >
        <div className="row">
          <div className="col-md-6 mb-5 mt-5">
            <div className="contact-image">
              <img src={contactImage} alt="Contact" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <div className="contact-form">
              <h2 className="text-center mb-5">Contact Us</h2>
              <form>
                <div className="row">
                <div className="form-group col-lg-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group  col-lg-6">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                  />
                </div>
                </div>
              <div className="row">
              <div className="form-group  col-lg-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group  col-lg-6">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                  />
                </div>
              </div>
               
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="contact-info col-md-6">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>info@example.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>+1234567890</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span>123 Street, City, Country</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
