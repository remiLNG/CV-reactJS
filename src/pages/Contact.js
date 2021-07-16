import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>1 bis boulevard prince de galles, Nice</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0617996805">
                <span
                  onClick={() => {
                    alert("Copie réussi");
                  }}
                  className="clickInput"
                >
                  06 17 99 68 05
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="remi.longin@outlook.fr">
                <span
                  onClick={() => {
                    alert("Copie réussi");
                  }}
                  className="clickInput"
                >
                  remi.longin@outlook.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/remi-longin/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <h4>Linkedin</h4>
            </a>
            <a
              href="https://github.com/remiLNG"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <h4>Github</h4>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
