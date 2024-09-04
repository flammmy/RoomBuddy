import React from 'react';
import './HeroPage.css';

const HeroPage = ({ imageUrl, headerText }) => {
  const heroStyles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="hero" style={heroStyles}>
      <div className="hero-overlay">
        <h1 className="hero-header">{headerText}</h1>
      </div>
    </div>
  );
};

export default HeroPage;
