import React from "react";
import "./UserHome.css";
import UserHeader from "../Common/Userheader";

const Userhome = () => {
  // const userData = JSON.parse(localStorage.getItem('user'));
  // console.log(userData.authority);
  return (
    <div>
      <UserHeader />

      <div className="home-base1">
        <div className="home-content1">
          Welcome <br />
          to <br />
          Room Rental
          <br />
          Services
        </div>
        <div className="home-image1"></div>
      
      </div>
    </div>
  );
};

export default Userhome;
