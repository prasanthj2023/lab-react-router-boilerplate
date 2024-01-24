import React from "react";
import { Link } from "react-router-dom";
import "./Navbr.css"
import Kalvium from "../assets/Kalvium-Logo-SVG.svg"

const Navbar = () => {

    const textStyle = {
        textDecoration: "none",
        color: "white",
    }

  return (
    <>
      <div className="navbar">
        <img src={Kalvium} alt="" />
        <button><Link style={textStyle} to="/">Home</Link></button>
        <button><Link style={textStyle} to="/contacts">Contact Us</Link></button>
        <button><Link style={textStyle} to="/about">About</Link></button>
      </div>
    </>
  );
};

export default Navbar;
