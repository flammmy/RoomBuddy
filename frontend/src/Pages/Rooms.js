import "./Viewroom.css";
import Userheader from "../Common/Userheader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";
const headerText = "Rooms"; // Set the desired header text
  const imageUrl = "https://source.unsplash.com/1920x1080/?nature"; // Set the desired background image URL

const Rooms = () => {
  let [room, setRoom] = useState([]);
  let roomdata = async () => {
    let data = await fetch(`http://localhost:4500/getroom`);
    data = await data.json();
    setRoom(data);
  };
  useEffect(() => {
    roomdata();
  }, []);

  const searchroom = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4500/searchroom/${key}`);
      result = await result.json();
      if (result) {
        setRoom(result);
      }
    } else {
      roomdata();
    }
  };

  return (
    <div>
      <Userheader />
      <HeroPage imageUrl={imageUrl} headerText={headerText} />{" "}
      <div className="room-container">
        <input
          type="search"
          placeholder="Search by room type"
          onChange={searchroom}
        />
        <div className="room-card-container">
          {room.map((item, index) => (
            <div className="room-card" key={index}>
              <div className="room-img-container">
                <img className="room-img" src={item.image} alt="Room" />
              </div>
              <div className="room-info">
                <table>
                  <tr>
                    <th>Room No. </th>
                    <td>: {item.rno}</td>
                  </tr>
                  <tr>
                    <th>Price.</th>
                    <td>: {item.price}</td>
                </tr>
                  <tr>
                    <th>Type</th>
                    <td>: {item.type}</td>
                  </tr>
                  <tr>
                    <th>Status </th>
                    <td>: {item.status}</td>
                  </tr>
                </table>
                {item.status === "Available" ? (
                  <Link to={"/booknow/" + item._id} className="btn btn-info book-now-button">
                    Book Now
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Rooms;