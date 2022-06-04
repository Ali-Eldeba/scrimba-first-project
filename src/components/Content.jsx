import React from "react";

// SVG's
import gmail from "../images/gmail.svg";
import linkedin from "../images/linkedin.svg";

export default function Content() {
  return (
    <div className="content container">
      <div className="name text-center">
        <h1>Laura Smith</h1>
        <p className="name__job">Frontend Developer</p>
        <p>laurasmith.website</p>
      </div>
      <div className="buttons d-flex justify-content-center gap-2">
        <button className="buttons__button buttons__button--white btn btn-light">
          <img src={gmail} /> Email
        </button>
        <button className="buttons__button buttons__button--blue btn btn-primary">
          <img src={linkedin} /> Linkedin
        </button>
      </div>
      <div className="about">
        <h3 className="about__title">About</h3>
        <p className="about__desc">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h3 className="interests__title">Interests</h3>
        <p className="interests__desc">
          About I am a frontend developer with a particular interest in making
          things simple and automating daily tasks. I try to keep up with
          security and best practices, and am always looking for new things to
          learn. Interests Food expert. Music scholar. Reader. Internet fanatic.
          Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
          fanatic.
        </p>
      </div>
    </div>
  );
}
