// ViewHotels.js
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import HeroPage from "./HeroPage";
import Userheader from "../Common/Userheader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ViewHotels.css"; // Import custom CSS file for styling

const headerText = "View Hotels";
const imageUrl = "https://source.unsplash.com/1920x1080/?nature"; // Random Unsplash image URL

const ViewHotels = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [city, setCity] = useState(null); // Define city state
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const cityParam = new URLSearchParams(location.search).get("city");
    setCity(cityParam); // Set city state

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:4500/viewusers");
        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [location.search]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("http://localhost:4500/getgallery");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  useEffect(() => {
    if (!userData || !city) return;

    // Filter users based on authority and location
    const filtered = userData.filter(
      (user) => user.authority === "admin" && user.location === city
    );
    setFilteredUsers(filtered);
  }, [userData, city]);

  return (
    <>
      <Userheader />
      <HeroPage imageUrl={imageUrl} headerText={headerText} />
      <div className="container mt-5">
        <h2 className="mb-5 view-hotels-heading">Hotel Owners in {city}</h2>
        <div className="row">
          {filteredUsers.map((user, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                {galleryData.length > 0 && (
                  <img
                    src="https://source.unsplash.com/1920x1080/?hotel"
                    className="card-img-top"
                    alt={`Gallery ${index}`}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{user.hotelName}</h5>
                  <p className="card-text">Address: {user.address}</p>
                  <p className="card-text">Location: {user.location}</p>
                  <Link
                    to={{
                      pathname: `/viewhotelroom`,
                      state: { username: user.username },
                    }}
                    className="btn btn-primary"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewHotels;
