import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <>
      <section className="contact-me">
        <h1>CONTACT ME ON</h1>
        <div className="icons-contact">
          <a href="https://www.instagram.com/putridresty_/">
            <img
              src=".\src\assets\icons\instagram.svg"
              alt="gambar-intagram"
              id="icons-ig"
            />
          </a>

          <a href="https://www.linkedin.com/in/putri-dresty-faristuta-4b4395208/">
            <img
              src=".\src\assets\icons\linkedin.svg"
              alt="gambar-linkedin"
              id="icons-linkedin"
            />
          </a>

          <a href="">
            <img src=".\src\assets\icons\whatsapp.svg" alt="" id="icons-wa" />
          </a>
        </div>
        <h1 className="cek-project">CHECK MY PROJECT ON</h1>
        <div className="icons-github">
          <a href="https://github.com/putridresty">
            <img src=".\src\assets\icons\github.svg" alt="" id="icons-github" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
