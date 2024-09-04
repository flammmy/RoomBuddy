import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const GalleryCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Hotel ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;