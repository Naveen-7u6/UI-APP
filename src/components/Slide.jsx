import React, { useState, useEffect } from "react";
import SlideBase from "./SlideBase";

const Slide = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow">
      <SlideBase image={images[currentImageIndex]} />
    </div>
  );
};

export default Slide;

