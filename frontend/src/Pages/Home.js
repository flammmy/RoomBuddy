// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./contact.css";

import Services from "./Services";
import MissionVision from "./MissionVision";
import "./Home.css";
import homeImage from "../Images/home.jpg"; // Import the image here
import aboutImage from "../Images/about.jpg";
import contactImage from "../Images/contact.jpg";
import Navbar from "./Navbar";
import BasicExample from "./Navbar";
import CompoRoom from "./CompoRoom";
import FeaturePage from "./FeaturePage";


const Home = () => {
  return (
    <>
      <Header />
{/* <BasicExample/> */}
      <div
        className="home-base"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container text-content">
          <div className="row">
            <div
              className="col-md-8 offset-md-2 text-center"
              style={{ marginTop: "100px" }}
            >
              <h1 className="display-4 mt-5 text-white">
                Welcome to Our Room Booking Platform
              </h1>
              <p className="lead mt-3 text-white">
                Find the perfect accommodation for your next adventure with
                ease. Whether you're planning a solo trip, family vacation, or
                business stay, we've got you covered. Explore our wide range of
                rooms and book your stay today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="text-center mb-5">
              <strong>About Us</strong>
            </h2>
            <p className="mb-3">Welcome to our Room Booking application!</p>
            <p className="mb-3">
              Our mission is to provide a convenient platform for users to book
              rooms effortlessly. Whether you're a traveler looking for
              accommodation or a host wanting to list your space, we've got you
              covered.
            </p>
            <p className="mb-3">
              With our intuitive interface, users can easily search for
              available rooms, make bookings, manage their reservations, and
              provide feedback on their experiences.
            </p>
            <p className="mb-3">
              For hosts, we offer a seamless process for listing rooms, managing
              bookings, and viewing feedback from guests. Our platform aims to
              facilitate communication and enhance the overall experience for
              both guests and hosts.
            </p>
            <p>
              Thank you for choosing our Room Booking application. We're
              dedicated to continuously improving our services to meet your
              needs.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About" />
          </div>
        </div>
      </div>
     
      <FeaturePage />
      <Services />
    
      <CompoRoom/>
      <div className="space"></div>
      <MissionVision />
      <div className="space"></div>
      <div className="contact-container" style={{ marginLeft: "50px", marginRight: "50px" }}>

        <div className="row" style={{ backgroundColor: "#fff5ec7a" }}>
          <div className="col-md-6 mb-5 mt-5">
            <div className="contact-image">
              <img src={contactImage} alt="Contact" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="contact-form">
              <h2 className="text-center mb-5">
                {" "}
                <strong>Contact Us</strong>{" "}
              </h2>
              <form>
                <div className="col-md-12 d-flex">
                  <div
                    className="form-group col-md-6"
                    style={{ marginRight: "20px" }}
                  >
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12 d-flex">
                  <div
                    className="form-group col-md-6 "
                    style={{ marginRight: "20px" }}
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
