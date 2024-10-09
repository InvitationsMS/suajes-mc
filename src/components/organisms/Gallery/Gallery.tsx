import { useState, useEffect } from "react";
import "./Gallery.scss";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [autoPlay]);

  const handleThumbnailClick = (index:any) => {
    setCurrentImageIndex(index);
  };

  const handleImageClick = () => {
    console.log("Imagen expandida");
  };

  return (
    <div className="gallery-container">
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`thumbnail ${currentImageIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="expanded-image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Expanded ${currentImageIndex + 1}`}
          onClick={handleImageClick}
          className="expanded-image"
        />
      </div>
    </div>
  );
};

export default Gallery;
