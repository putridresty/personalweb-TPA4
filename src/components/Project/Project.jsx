import React from "react";
import "./ProjectStyle.css";
import PropTypes from "prop-types";

const Project = ({ titleproj, url }) => {
  return (
    <>
      <div className="card">
        <a href={url}>
          <img src="/icons/github.svg" alt="icons-github" id="icons-github" />
          <div className="container">
            <h3>{titleproj}</h3>
          </div>
        </a>
      </div>
    </>
  );
};

Project.propTypes = {
  titleproj: PropTypes.string,
  url: PropTypes.string,
};
export default Project;
