import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import parse from "html-react-parser";
import "./RoomDetails.css";
import Lottie from "lottie-web";
import Adminheader from "../Common/Adminheader";
import HeroPage from "./HeroPage";
import imgbackground from "../Images/hotelrelated7.jpg";
import Loader from "../Common/Loader";
import Footer from "../Common/Footer";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const headerText = "Room Details";

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4500/getdetailsroom/${id}`);
        if (!response.ok) {
          throw new Error("Room not found");
        }
        const data = await response.json();
        console.log(data);
        setRoom(data.find((r) => r._id === id));
      } catch (error) {
        console.error("Error fetching room details:", error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    getRoomDetails();
  }, [id]);

  if (!room) {
    return (
      <>
        <Adminheader />
        <HeroPage imageUrl={imgbackground} headerText={headerText} />
        <Loader /> {/* Render loader until room details are fetched */}
      </>
    );
  }

  return (
    <>
      <Adminheader />
      <HeroPage imageUrl={imgbackground} headerText={headerText} />
      <div className="room-details-container">
        <div className="room-details-image">
          <img className="room-img" src={room.image} alt="Room" />
        </div>
        <div className="room-details-description">
          <div className="mt-5">
            {parse(room.description)}
            <div className="room-details-price">
              <h3>Price</h3>
              <p>{room.price}</p>
            </div>
            <div className="room-details-status">
              <h3>Status</h3>
              <p>{room.status}</p>
            </div>
          </div>
        </div>
        <Link to="/viewroom" className="btn btn-primary">
          Back to Rooms
        </Link>
      </div>
      <Footer/>
    </>
  );
};

export default RoomDetails;
