import React, { useState } from "react";
import "./ImageLoader.css";

const ImageLoader = ({ src, alt, className, style, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`image-loader-container ${isLoaded ? "loaded" : ""} ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {!isLoaded && <div className="skeleton"></div>}
      <img
        src={src}
        alt={alt}
        className={`image-content ${isLoaded ? "visible" : ""}`}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default ImageLoader;
