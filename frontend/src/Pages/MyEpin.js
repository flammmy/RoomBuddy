import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Common/Sidebar";

const MyEpin = () => {
  const [pins, setPins] = useState([]);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    fetchPins();
  }, []);

  const fetchPins = async () => {
    try {
      const response = await fetch(`http://localhost:4500/pins/${userData.username}`);
      console.log('Response:', response); // Debug log
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched pins:", data); // Debug log
        setPins(data);
      } else {
        console.error("Failed to fetch pins:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  };

  const handleUse = async (pin) => {
    let user = userData.username;
    try {
      const response = await fetch(`http://localhost:4500/usepin/${pin._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "0", used_by: user }),
      });
      if (response.ok) {
        console.log("Pin used successfully");
        fetchPins();
        // Update userData
        setUserData({ ...userData, status: 1 });
        localStorage.setItem("user", JSON.stringify({ ...userData, status: 1 }));
      } else {
        console.error("Failed to use pin");
      }
    } catch (error) {
      console.error("Error using pin:", error);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="p-4">
        <div className="main-heading mb-4">
          <h2>Transfer Pins</h2>
        </div>
        <div className="container mt-5">
          <table className="table table-bordered">
            <thead className="dark-table">
              <tr>
                <th>Plan</th>
                <th>Pin</th>
                <th>Status</th>
                <th>Transfer To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pins.map((pin) => (
                <tr key={pin._id} className={pin.status === "0" ? "bg-success text-white" : ""}>
                  <td>{pin.plan}</td>
                  <td>{pin.pin}</td>
                  <td>{pin.status}</td>
                  <td>
                    {pin.status === "2"
                      ? pin.transfer_to
                      : pin.status === "1"
                      ? "Waiting to be used"
                      : pin.status === "0"
                      ? "Used"
                      : null}
                  </td>
                  <td>
                    {pin.status == "2" && userData.status == "0" ? (
                      <button className="btn btn-primary" onClick={() => handleUse(pin)}>
                        Use
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyEpin;