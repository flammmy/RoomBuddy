import React, { useEffect } from 'react';
import './MissionVision.css';
import contactImage from "../Images/signup.jpg";
import { FaRegCheckCircle } from 'react-icons/fa';

const MissionVision = () => {
  useEffect(() => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contents = document.querySelectorAll('.content');

    navButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        navButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        contents.forEach((content) => content.classList.remove('active'));
        contents[index].classList.add('active');
      });
    });
  }, []);

  return (
    <div className="containerflex">
      <div className="column left">
        <img src={contactImage} alt="Mission or Vision" className="mission-vision-img" />
      </div>
      <div className="column right">
        <nav className='nav2' >
          <button className="nav-button mission active">Mission</button>
          <button className="nav-button vision">Vision</button>
        </nav>
        <div className="content mission active">
          <h2>Mission</h2>
          <p>We are committed to providing a seamless platform that connects travelers with their ideal accommodations effortlessly. Our mission is to offer a diverse range of accommodations worldwide, ensuring a user-friendly experience for both guests and hotel partners.</p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Wide Selection
                  </div>
                  <div className="back">
                    <p>Access to a diverse range of accommodations worldwide.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> User-Friendly
                  </div>
                  <div className="back">
                    <p>Intuitive interface for easy browsing and booking.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Reliable Support
                  </div>
                  <div className="back">
                    <p>Dedicated customer service to assist with inquiries and issues.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content vision">
          <h2>Vision</h2>
          <p>Our vision is to be the leading platform in the hospitality industry, offering innovative solutions for travelers and hotel owners alike. We aim to provide personalized recommendations, advanced analytics, and round-the-clock support to optimize guest experiences and hotel operations.</p>
          <h3>Our Services Include:</h3>
          <ul>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Effortless Booking
                  </div>
                  <div className="back">
                    <p>Simple and secure reservation process.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Personalized Recommendations
                  </div>
                  <div className="back">
                    <p>Tailored suggestions based on traveler preferences.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Advanced Analytics
                  </div>
                  <div className="back">
                    <p>Insights to improve hotel performance and guest experiences.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> Marketing Support
                  </div>
                  <div className="back">
                    <p>Promotional assistance to increase visibility and bookings.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <FaRegCheckCircle className="icon" /> 24/7 Support
                  </div>
                  <div className="back">
                    <p>Round-the-clock assistance for guests and partners.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
