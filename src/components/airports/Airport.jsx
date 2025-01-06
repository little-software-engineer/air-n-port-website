import React, { useState } from "react";
import "./Airport.css";

const slides = [
  {
    img: "/images/airport1.jpg",
    text: "Frankfurt Airport, is Germany's main international airport by passenger numbers, located in Frankfurt, Germany's fifth-largest city. In the German Aeronautical Information Publication, its name is Frankfurt Main Airport",
  },
  {
    img: "/images/airport2.jpg",
    text: "Los Angeles International Airport is the primary international airport serving Los Angeles and its surrounding metropolitan area, in the U.S. state of California.",
  },
  {
    img: "/images/airport3.jpg",
    text: "Nice Côte d'Azur Airport is an international airport located 3.2 NM southwest of Nice, in the Alpes-Maritimes department of France. It is the third busiest airport in France and serves as a focus city for Air France and an operating base for easyJet.",
  },
  {
    img: "/images/airport4.jpg",
    text: "Belgrade Nikola Tesla Airport or Belgrade Airport is an international airport serving Belgrade, Serbia. It is the largest and the busiest airport in Serbia, situated 18 km west of downtown Belgrade near the suburb of Surčin, surrounded by fertile lowlands.",
  },
];

export const Airport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <div className="airport">
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

export default Airport;
