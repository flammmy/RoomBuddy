import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Common/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Viewbooking = () => {
  let [data, setData] = useState([]);

  let bookingdata = async () => {
    let result = await fetch(`http://localhost:4500/bookings`);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    bookingdata();
  }, []);

  let delbooking = async (id) => {
    if (window.confirm("Are you sure?")) {
      let result = await fetch(`http://localhost:4500/deletebooking/${id}`, {
        method: "delete",
      });
      result = await result.json();
      if (result) {
        bookingdata();
      }
    }
  };

  const searchbooking = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4500/searchbooking/${key}`);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } else {
      bookingdata();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem" }}>
        <div className="main-heading">
          <h2>View Booking</h2>
        </div>
        <div className="row m-auto justify-content-center mt-5 mb-5 viewfeedback-base">
          <input
            type="search"
            className="form-control mb-3"
            placeholder="Search by email or name or booking date"
            onChange={searchbooking}
          />
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item._id} align="center">
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
                      <Link to="#" className="btn btn-primary btn-sm disabled">
                        {item.status}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/editbooking/${item._id}`}
                        className="btn btn-warning btn-sm"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Link>{" "}
                      <button
                        onClick={() => delbooking(item._id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr align="center">
                  <td colSpan="11">
                    <h1>No Booking Found</h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Viewbooking;
