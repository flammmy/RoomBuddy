import React, { useState, useEffect } from "react";
import Adminheader from "../Common/Adminheader";
import { useParams, useNavigate } from "react-router-dom";
import HeroPage from "./HeroPage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Addroom.css";
import Sidebar from "../Common/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const headerText = "Edit Room"; // Set the desired header text
const imageUrl = "https://source.unsplash.com/1920x1080/?nature"; // Set the desired background image URL

const Editroom = () => {
  let navigate = useNavigate();
  let params = useParams();
  let [rno, setRno] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [type, setType] = useState("");
  let [status, setStatus] = useState("");
  let [description, setDescription] = useState("");

  useEffect(() => {
    editRoom();
  }, []);

  let editRoom = async () => {
    let result = await fetch(`http://localhost:4500/editroom/${params.id}`);
    result = await result.json();
    setRno(result.rno);
    setPrice(result.price);
    setType(result.type);
    setStatus(result.status);
    setImage(result.image);
    setDescription(result.description);
  };

  let convert = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  let updateroom = async () => {
    let result = await fetch(`http://localhost:4500/updateroom/${params.id}`, {
      method: "put",
      corssDomain: true,
      body: JSON.stringify({ rno, price, image, type, status, description }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    result = await result.json();
    navigate("/viewroom");
    if (result) {
      alert("Room Updated Successfully");
    }
  };

  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <main className="p-4">
          <div className="main-heading mb-4">
            <h2>Edit Room details</h2>
          </div>
          <div className="row m-auto justify-content-center editroom-base">
            <div className="row editroom-main">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control editroom-input"
                  placeholder="Enter Room Number"
                  onChange={(e) => setRno(e.target.value)}
                  value={rno}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control editroom-input"
                  placeholder="Enter Room Number"
                  onChange={(e) => setRno(e.target.value)}
                  value={rno}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="number"
                  className="form-control editroom-input"
                  placeholder="Enter Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="file"
                  accept=".jpg, .png"
                  onChange={convert}
                  className="form-control editroom-input"
                />
              </div>
              <div className="col-md-6">
                {" "}
                <label>Room Type-</label>
                <select
                  className="form-control editroom-input"
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
              <div className="col-md-6">
                {" "}
                <label>Room Status-</label>
                <select
                  className="form-control editroom-input"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option hidden>Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>

              <label>Description-</label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />

              <button className="btn btn-primary" onClick={updateroom}>
                Update Room
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Editroom;
