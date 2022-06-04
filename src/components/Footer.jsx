import React from "react";

// SVG's
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center">
      <button className="footer__icon btn">
        <img src={twitter} />
      </button>
      <button className="footer__icon btn">
        <img src={facebook} />
      </button>
      <button className="footer__icon btn">
        <img src={instagram} />
      </button>
      <button className="footer__icon btn">
        <img src={github} />
      </button>
    </div>
  );
}
