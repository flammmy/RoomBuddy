import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import citiesInIndia from './Cities';
import './HomePage.css';
import Userheader from '../Common/Userheader';
import Footer from '../Common/Footer';
// import loginBackground from "../Images/homeimg.jpg"; 


const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleSearch = () => {
    if (selectedCity) {
      const city = encodeURIComponent(selectedCity.value);
      const path = `/viewhotels?city=${city}`;
      window.history.pushState({ path }, '', path);
    }
  };

  return (
    <>
      <Userheader />
      <div className="background-photo">
        <div className="container d-flex align-items-center justify-content-center vh-100 ">
          <div className="input-group custom-input input-group-lg w-70" style={{display: "contents"}} >
            <Select
              className="custom-select custom-input"
              value={selectedCity}
              onChange={handleCityChange}
              options={citiesInIndia}
              placeholder="Select City"
            />
            <Link to={`/viewhotels?city=${selectedCity?.value}`} className="btn btn-primary custom-btn1" onClick={handleSearch}>Search Hotels</Link>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default HomePage;