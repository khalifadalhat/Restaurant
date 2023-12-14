import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/lunch.jpg";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => [setOpenLinks(!openLinks)];
  return (
    <div className="navbar">
      <div className="leftSide">
        <div id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="Logo" />
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
