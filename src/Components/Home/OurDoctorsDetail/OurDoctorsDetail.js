import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurDoctorsDetail = (props) => {
  const { img, name, icon, phone } = props.doctor;
  return (
    <div className="col-md-4 text-center">
      <div>
        <img style={{ height: "250px", width: "100%" }} src={img} alt="" />
        <h5 className="mt-2" style={{ fontSize: "16px", marginLeft: "20px" }}>
          {name}
        </h5>
      </div>
      <div
        style={{ marginLeft: "20px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "#6ACECE" }}
            icon={icon}
          ></FontAwesomeIcon>
        </div>
        <div style={{ fontSize: "12px" }} className="text-secondary">
          {phone}
        </div>
      </div>
    </div>
  );
};

export default OurDoctorsDetail;
