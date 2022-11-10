import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";

export const Home = () => {
  return (
    <div className="home">
      <section className="introduction">
        <div className="intro-img">
          <img
            src=".\src\assets\img\putri.png"
            alt="putriprofil"
            id="putriprofil"
          />
        </div>
        <div className="intro-text">
          <h1>Hello... I'm Putri Dresty</h1>
          <h3>Frontend Web Developer</h3>
          <p>
            I am a student of The University of Jember who is interested in
            design and programming. Similar fields of interest are UI Designer
            and Frontend Web Developer.
          </p>
          <Link to={"/contact"}>
            <button>Contact Me!</button>
          </Link>
        </div>
      </section>
      <section className="skills">
        <h1>SKILLS</h1>
        <div className="icons-skills">
          <img
            src="..\src\assets\icons\figma.svg"
            alt="gambar-figma"
            id="icons-figma"
          />

          <img src="..\src\assets\icons\html5.svg" alt="" id="icons-html" />

          <img src="..\src\assets\icons\css3-alt.svg" alt="" id="icons-css" />

          <img src="..\src\assets\icons\square-js.svg" alt="" id="icons-js" />
        </div>
      </section>
    </div>
  );
};

export default Home;
