import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../Common/Header";
import Adminheader from "../Common/Adminheader";
import Select from "react-select";
import citiesInIndia from "./Cities";
import imgbackground from "../Images/contact.jpg";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";
import "./AccountDetails.css"; // Import custom CSS for AccountDetails component
import Sidebar from "../Common/Sidebar";

const headerText = "Account Details";

const AccountDetails = () => {
  const navigate = useNavigate();
  const [hotelName, setHotelName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUserData = {
      hotelName,
      address,
      location: selectedLocation ? selectedLocation.value : "",
    };

    try {
      const response = await fetch(
        `http://localhost:4500/updateUser/${userData.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (response.ok) {
        alert("Account details updated successfully");
        navigate("/dashboard");
      } else {
        throw new Error("Failed to update account details");
      }
    } catch (error) {
      console.error("Error updating account details:", error);
      alert("Failed to update account details. Please try again later.");
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "2rem", width: "100%" }}>
          <div className="main-heading">
            <h2>Account Details</h2>
          </div>
          <div className="container mt-5 mb-5">
            <div className="account-details-form">
              <h2 className="mb-4">Account Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="hotelName">Hotel Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <Select
                    className="mt-2"
                    options={citiesInIndia}
                    onChange={setSelectedLocation}
                    value={selectedLocation}
                    placeholder="Select your location"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AccountDetails;
