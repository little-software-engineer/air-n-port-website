import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className="navbar">
      <div className="nav-logo" onClick={() => setCurrentPage("home")}>
        Bojanaport
      </div>
      <ul className="nav-menu">
        <li>
          <button onClick={() => setCurrentPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("explore")}>Explore</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("airports")}>Airports</button>
        </li>
        <li className="nav-contact">
          <button onClick={() => setCurrentPage("contacts")}>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
