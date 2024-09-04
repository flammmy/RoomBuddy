// MyBooking.js
import React from 'react';
import './MyBookings.css'; // Import CSS file
import Userheader from '../Common/Userheader';
import HeroPage from './HeroPage';
const headerText = "Room Details"; // Set the desired header text
  const imageUrl = "https://source.unsplash.com/1920x1080/?nature"; // Set the desired background image URL

const MyBookings = () => {
    return (
        <>
        <Userheader/>
        <HeroPage imageUrl={imageUrl} headerText={headerText} />{" "}
         <div className="MyBooking">
            <h1>My Booking</h1>
            <p>Your booked rooms will be displayed here...</p>
        </div>
        </>
       
    );
}

export default MyBookings;
