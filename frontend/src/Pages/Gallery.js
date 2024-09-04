import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Common/Sidebar";
import './Gallery.css';
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/getgallery`);
        const data = response.data.filter(
          (image) => image.username === userData.username
        );
        setGalleryData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, [userData.email]);

  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`http://localhost:4500/deletegallery/${imageId}`);
      setGalleryData((prevGalleryData) =>
        prevGalleryData.filter((image) => image._id !== imageId)
      );
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "2rem" }}>
          <div className="main-heading">
            <h2>Gallery</h2>
          </div>
          <div className="row m-auto row">
            {galleryData.map((image, index) => (
              <div key={image._id} className="col-md-3 mb-3">
                <div className="img-container">
                  <img
                    src={image.image}
                    alt={`Image ${index}`}
                    className="img-fluid"
                  />
                  <div
                    className="delete-icon"
                    onClick={() => handleDelete(image._id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );

};

export default Gallery;
