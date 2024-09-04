import "./Viewroom.css";
import Adminheader from "../Common/Adminheader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";
import Loader from "../Common/Loader";
import imgbackground from "../Images/hotel9.jpg"; // Import login background image
import Sidebar from "../Common/Sidebar";

const Viewroom = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [rooms, setRooms] = useState([]);
  const headerText = "Rooms";


  const fetchRooms = async () => {
    try {
      const data = await fetch(`http://localhost:4500/getroom/${userData.username}`);
      const jsonData = await data.json();
      setRooms(jsonData);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };
  
  const deleteRoom = async (id) => {
    try {
      const result = await fetch(`http://localhost:4500/deleteroom/${id}`, {
        method: "delete",
      });
      const jsonResult = await result.json();
      if (jsonResult) {
        fetchRooms();
      }
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div>
   <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem" }}>
        <div className="main-heading">
          <h2>Rooms</h2>
        </div>
   
        <div className="room-card-container">
          {rooms.map((room) => (
            <div key={room._id} className="room-card">
              <div className="room-img-container">
                <img className="room-img" src={room.image} alt="Room" />
              </div>
              <div className="room-info">
                <table>
                  <tbody>
                    <tr>
                      <th>Room No.</th>
                      <td>{room.rno}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{room.price}</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>{room.type}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{room.status}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="room-btn">
                  <Link to={"/editroom/" + room._id} className="btn btn-info">Edit</Link>{" "}
                  <button className="btn btn-danger" onClick={() => deleteRoom(room._id)}>Delete</button>{" "}
                  <Link to={"/roomdetails/" + room._id} className="btn btn-primary">View Details</Link>
                </div>
              
              </div>
              
            </div>
          ))}
        </div>
        </main>
      </div>
    
    </div>
  );
};

export default Viewroom;
