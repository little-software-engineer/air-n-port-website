import React, { useState } from "react";
import "./Explore.css";

const slides = [
  {
    img: "/images/actress-halle-berry-on.jpg",
    text: "Halle Berry’s 1992 travel ’fit was a play in proportions, with an oversize leather jacket and well-tailored jeans.",
  },
  {
    img: "/images/look2.jpg",
    text: "We really miss the days when people would get dressed for the airport. Cindy Crawford at LAX.",
  },
  {
    img: "/images/look3.jpg",
    text: "British minimalism. Hugh Grant and Elisabeth Hurley at LHR.",
  },
  {
    img: "/images/look4.jpg",
    text: "Whitney Houston mixed and matched the decade’s eccentricities with its minimalism.",
  },
];

export const Explore = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <div className="explore">
      <div className="slideshow-container">
        <div className="slide">
          <img
            src={slides[currentSlide].img}
            alt={`Slide ${currentSlide + 1}`}
          />
          <div className="slide-text">{slides[currentSlide].text}</div>
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Explore;
