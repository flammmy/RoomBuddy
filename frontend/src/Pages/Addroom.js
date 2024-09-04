import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Addroom.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
const headerText = "Add Rooms"; // Set the desired header text
const imageUrl = "https://source.unsplash.com/1920x1080/?nature";

const Addroom = () => {
  let navigate = useNavigate();
  let [rno, setRno] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  // let [img2, setImg2] = useState("");
  // let [img3, setImg3] = useState("");
  let [type, setType] = useState("");
  let [status, setStatus] = useState("");
  let [description, setDescription] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Check if user is not logged in or not a hotel owner
    if (!userData || userData.authority !== "admin") {
      navigate("/login"); // Redirect to login page
    }
  }, [userData, navigate]);

  let convert = (e, index) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (index === 1) {
        setImage(reader.result);
      // } else if (index === 2) {
      //   setImg2(reader.result);
      // } else if (index === 3) {
      //   setImg3(reader.result);
      }
    };
  };

  let addroom = async () => {
    console.log(rno, price, type, status, image, description, userData.username);
    let result = await fetch(`http://localhost:4500/addroom`, {
      method: "post",
      corssDomain: true,
      body: JSON.stringify({ rno, price, image, type, status, description, username: userData.username }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    result = await result.json();
    if (result) {
      alert("Room Added Successfully");
    }
    navigate("/addroom");
  };

  return (
    <div>
       <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem" }}>
        <div className="main-heading">
          <h2>Add Room</h2>
        </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              <select
                className="addroom-input"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option hidden>Select Status</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                placeholder="Enter Price"
                className="addroom-input"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="file"
                accept=".jpg,.png"
                className="addroom-input"
                onChange={(e) => convert(e, 1)}
              />
            </div>
            {/* <div className="col-lg-6">
              <input
                type="file"
                accept=".jpg,.png"
                className="addroom-input"
                onChange={(e) => convert(e, 2)}
              />
            </div> */}
          </div>
          {/* <input
            type="file"
            accept=".jpg,.png"
            className="addroom-input"
            onChange={(e) => convert(e, 3)}
          /> */}
          <div className="row">
            <div className="col-lg-6">
              <select
                className="addroom-input"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option hidden>Select Room Type</option>
                <option value="1 Person">1 Person</option>
                <option value="2 Person">2 Person</option>
                <option value="3 Person">3 Person</option>
                <option value="4 Person">4 Person</option>
              </select>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter Room Number"
            className="addroom-input"
            onChange={(e) => setRno(e.target.value)}
            value={rno}
          />

          <label>Description-</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
          <div className="text-center">
            <button className="btn btn-primary" onClick={addroom}>
              Add Room
            </button>
          </div>
          </main>    
        </div>
    
    </div>
  );
};

export default Addroom;
