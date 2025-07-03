import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/lunch.jpg";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Savory Haven Logo" className="logo" />
          <span className="logo-text">Savory Haven</span>
        </Link>
      </div>

      <div className="rightSide">
        <div className={`nav-links ${openLinks ? "active" : ""}`}>
          <Link to="/" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/menu" onClick={toggleNavbar}>
            Menu
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            About
          </Link>
          <Link to="/contact" onClick={toggleNavbar}>
            Contact
          </Link>
        </div>
        <button className="menu-button" onClick={toggleNavbar}>
          {openLinks ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
