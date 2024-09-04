import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Adminheader from '../Common/Adminheader';
import HeroPage from './HeroPage';
import './ViewHotelRoom.css';

const ViewHotelRoom = () => {
  const userData = JSON.parse(localStorage.getItem('user')) || {}; // Handle potential null userData
  const [rooms, setRooms] = useState([]);
  const headerText = 'Hotel Rooms';
  const imageUrl = 'https://source.unsplash.com/1920x1080/?nature';

  const fetchRooms = async () => {
    try {
      const data = await fetch(`http://localhost:4500/getroom?username=${userData.username}`);
      const jsonData = await data.json();
      setRooms(jsonData);
    } catch (error) {
      console.error('Error fetching room data:', error);
      // Handle error, perhaps set an empty array for rooms or show an error message to the user
    }
  };

  const deleteRoom = async (id) => {
    try {
      const result = await fetch(`http://localhost:4500/deleteroom/${id}`, {
        method: 'delete',
      });
      const jsonResult = await result.json();
      if (jsonResult) {
        fetchRooms();
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      // Handle error, perhaps show an error message to the user
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []); // Fetch rooms only once when the component mounts

  return (
    <div>
      <Adminheader />
      <HeroPage imageUrl={imageUrl} headerText={headerText} />
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room._id} className="room-item">
            <img className="room-img" src={room.image} alt="Room" />
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
            <div className="btn-group">
              <Link to={`/editroom/${room._id}`} className="btn btn-info">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={() => deleteRoom(room._id)}>
                Delete
              </button>
              <Link
                to={{
                  pathname: `/roomdetails/${room._id}`,
                  state: { userEmail: userData.email }
                }}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
        {rooms.length === 0 && <p>No rooms available.</p>} {/* Conditional rendering for empty room list */}
      </div>
    </div>
  );
};

export default ViewHotelRoom;
