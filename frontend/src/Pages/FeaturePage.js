import React from 'react';
import './FeaturePage.css';

const FeaturePage = () => {
  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to generate a random image URL from Unsplash
  const getRandomImageUrl = () => {
    const randomId = getRandomNumber(0, 1000); // You can adjust the range of random IDs
    return `https://source.unsplash.com/800x800/?mountain&${randomId}`;
  };

  return (
    <div className="feature-page">
      {/* Left small images */}
      <div className="small-images left-images">
        <img src={getRandomImageUrl()} alt="Mountain" />
        <img src={getRandomImageUrl()} alt="Mountain" />
        <img src={getRandomImageUrl()} alt="Mountain" />
      </div>
      
      {/* Center large image */}
      <div className="center-image">
        <img src={getRandomImageUrl()} alt="Mountain" />
      </div>

      {/* Right small images */}
      <div className="small-images right-images">
        <img src={getRandomImageUrl()} alt="Mountain" />
        <img src={getRandomImageUrl()} alt="Mountain" />
        <img src={getRandomImageUrl()} alt="Mountain" />
      </div>
    </div>
  );
};

export default FeaturePage;
