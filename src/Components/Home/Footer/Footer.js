import React from "react";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faGooglePlus, faTwitter);

const Footer = () => {
  return (
    <section className="d-flex justify-content-center mt-5 pt-5">
      <div
        className="row text-secondary w-75 footer-section"
        style={{ fontWeight: "500" }}
      >
        <div className="col-md-3">
          <p className="mt-5">Emergency Denal Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3">
          <h6 className="mb-4" style={{ color: "#6ACECE" }}>
            Services
          </h6>
          <p>Emergency Denal Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3">
          <h6 className="mb-4" style={{ color: "#6ACECE" }}>
            Oral Health
          </h6>
          <p>Emergency Denal Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3">
          <h6 className="mb-4" style={{ color: "#6ACECE" }}>
            Our Address
          </h6>
          <p>Gaibandha - 5700, Dash Bekarir Mor</p>
          <div className="mt-5 mb-5">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
            <FontAwesomeIcon
              icon={["fab", "google-plus"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              style={{
                height: "40px",
                width: "50px",
                color: "#6ACECE",
              }}
            />
          </div>
          <div className="mt-5 pt-5 ">
            <p className="call-now">Call Now</p>
            <button
              className="btn"
              style={{
                backgroundColor: "#6ACECE",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              +88 01752746973
            </button>
          </div>
        </div>
        <footer className="copyRight text-center">
          Copyright {new Date().getFullYear()} All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default Footer;
