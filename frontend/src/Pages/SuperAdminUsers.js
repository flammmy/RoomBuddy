import { useState, useEffect } from "react";
import Adminheader from "../Common/Adminheader";
import "./Users.css";
import "../Common/Style.css";
import HeroPage from "./HeroPage";
import Superadminheader from "../Common/Superadminheader";
const headerText = "Users"; // Set the desired header text
  const imageUrl = "https://source.unsplash.com/1920x1080/?nature"; // Set the desired background image URL
const Superadminusers = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4500/viewusers");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return; // If user cancels, do nothing
    
    try {
      await fetch(`http://localhost:4500/deleteuser/${id}`, {
        method: "DELETE",
      });
      // Update data after deletion
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredData = data.filter(
    (item) =>
      (typeof item.name === 'string' && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.email === 'string' && item.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.contact === 'string' && item.contact.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.gender === 'string' && item.gender.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.address === 'string' && item.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div>
      <Superadminheader/>
      <HeroPage imageUrl={imageUrl} headerText={headerText} />{" "}
      <div className="row justify-content-center users-base" style={{ height: "100vh", width: "100%", overflowY: "hidden" }}>
        <div className="col-md-10 users-main">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <table className="table table-bordered">
            <thead>
              <tr align="center">
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Location</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item._id} align="center">
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.authority}</td>
                    <td>{item.contact}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.location}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteUser(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr align="center">
                  <td colSpan="7">
                    <div className="user-data bg-none">No Data Found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Superadminusers;
