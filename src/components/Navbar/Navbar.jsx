import React from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import SliderToogle from "../SliderToogle/SliderToogle";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo-putri">Putri Dresty</h1>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/project"}>Project</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <SliderToogle />
    </nav>
  );
};

export default Navbar;
