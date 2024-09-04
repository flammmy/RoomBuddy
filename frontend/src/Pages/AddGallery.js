import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Common/Sidebar.js";

const Addgallery = () => {
  let navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [image, setImage] = useState(null); // Define image state

  useEffect(() => {
    // Check if user is not logged in or not a hotel owner
    if (!userData || userData.authority !== "admin") {
      navigate("/login"); // Redirect to login page
    }
    if (userData.status === 0) {
      navigate("/myepin"); // Redirect to EPIN page
    }
  }, [userData, navigate]);

  let convert = (e, index) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (index === 1) {
        // Create a new image element
        var img = new Image();
        img.src = reader.result;
        img.onload = () => {
          // Calculate dimensions for 3:2 aspect ratio
          const width = img.width;
          const height = img.height;
          const aspectRatio = 3 / 2;
          let newWidth, newHeight;
          if (width / height > aspectRatio) {
            newWidth = height * aspectRatio;
            newHeight = height;
          } else {
            newWidth = width;
            newHeight = width / aspectRatio;
          }
          var canvas = document.createElement("canvas");
          canvas.width = newWidth;
          canvas.height = newHeight;
          // Draw image on canvas with cropped dimensions
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, newWidth, newHeight);
          // Convert canvas to base64 encoded image data URL
          var croppedImage = canvas.toDataURL("image/jpeg");
          setImage(croppedImage);
        };
      }
    };
  };

  let addphoto = async () => {
    console.log(image, userData.email);
    let result = await fetch(`http://localhost:4500/addtogallery`, {
      method: "post",
      corssDomain: true,
      body: JSON.stringify({ image, username: userData.username }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    result = await result.json();
    if (result) {
      alert("Photo Added Successfully");
    }
    navigate("/addgallery");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "2rem" }}>
        <div className="main-heading">
          <h2>Add Photo</h2>
        </div>
        <div className="row m-auto justify-content-center mt-5 mb-5 addroom-base card-1">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="file"
                  accept=".jpg,.png"
                  className="addroom-input"
                  onChange={(e) => convert(e, 1)}
               required />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={addphoto}>
                Add to Gallery
              </button>
            </div>
          </div>
        
      </main>
    </div>
  );
};

export default Addgallery;
