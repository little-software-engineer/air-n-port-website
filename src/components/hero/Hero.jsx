import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import pause_icon from "../../Assets/pause_icon.png";
import play_icon from "../../Assets/play_icon.png";
export const Hero = ({
  heroData, // Current hero text data to display.
  setHeroCount, // Function to update the hero slide index.
  heroCount, // Current hero slide index.
  setPlayStatus, // Function to toggle play status.
  playStatus, // Boolean indicating play/pause state.
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      {/* Explore Features Section */}
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      {/* Hero Dots and Play Button */}
      <div className="hero-dot-play">
        {/* Dots for Navigating Between Slides */}
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)} //Toggles the play/pause state.
            src={playStatus ? pause_icon : play_icon} // Displays the appropriate icon based on playStatus.
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
