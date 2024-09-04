import { useState } from "react";
import Userheader from "../Common/Userheader";
import { useEffect } from "react";
import "./Viewfeedback.css";
import HeroPage from "./HeroPage";
const headerText = "My Bookings"; // Set the desired header text
  const imageUrl = "https://source.unsplash.com/1920x1080/?hotel"; // Set the desired background image URL

const Mybooking = () => {
  let [data, setData] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));
  let email = user.email;

  let bookingdata = async () => {
    let result = await fetch(`http://localhost:4500/userbooking/${email}`);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    bookingdata();
  }, []);
  return (
    <div>
      <Userheader />
      <HeroPage imageUrl={imageUrl} headerText={headerText} />{" "}
      <div className="row m-auto justify-content-center viewfeedback-base">
        <div className="col-md-10 viewfeedback-main">
          <table className="table table-bordered">
            <tr align="center">
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Room No.</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Type</th>
              <th>Booking Date</th>
              <th>Status</th>
            </tr>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr align="center">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.roomno}</td>
                  <td>{item.price}</td>
                  <td>{item.duration} Month</td>
                  <td>{item.type}</td>
                  <td>{item.bookingdate}</td>
                  <td>
                    <button className="btn btn-primary btn-sm disabled">
                      {item.status}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr align="center">
                <th colSpan="10">
                  <h1>No Booking Found</h1>
                </th>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mybooking;
