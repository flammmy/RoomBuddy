import React from "react";
import "./about.css";
import Header from "../Common/Header";
import imgbackground from "../Images/hotelrelated8.jpg";

import aboutImage from "../Images/about.jpg";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";
const headerText = "About"; // Set the desired header text

const About = () => {
  return (
    <>
      <Header />
      <HeroPage imageUrl={imgbackground} headerText={headerText} />

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="text-center mb-5">
              <strong>
                Welcome to <span className="highlight">Room Buddy Hostel</span>
              </strong>
            </h2>
            <p className="mb-3">
              Your Ultimate Destination for Hostel Booking and Listing
            </p>
            <p className="mb-3">
              At <span className="highlight">Room Buddy Hostel</span>, we're
              dedicated to revolutionizing the way travelers find accommodations
              and hosts list their spaces. Our platform offers a seamless
              experience for both guests and hosts, ensuring convenience,
              affordability, and safety.
            </p>
            <p className="mb-3">
              For Travelers: Discover unique and budget-friendly hostels around
              the world with ease. Our intuitive interface allows you to search
              for available rooms, make bookings, manage reservations, and share
              feedback effortlessly.
            </p>
            <p className="mb-3">
              For Hosts: Showcase your hostel to a global audience and maximize
              your bookings. With{" "}
              <span className="highlight">Room Buddy Hostel</span>, you can list
              your spaces, manage bookings, and receive valuable feedback from
              guests, all in one place.
            </p>
            <p>
              Thank you for choosing{" "}
              <span className="highlight">Room Buddy Hostel</span>. We're
              committed to providing you with the best hostel booking and
              listing experience. Let's embark on this journey together!
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
