import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurDoctorsDetail = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <div>
        <img
          style={{ height: "250px", width: "100%" }}
          src={`http://localhost:5000/${doctor.img}`}
          alt=""
        />
        <h5 className="mt-2" style={{ fontSize: "16px", marginLeft: "20px" }}>
          {doctor.name}
        </h5>
      </div>
      <div
        style={{ marginLeft: "20px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "#6ACECE" }}
            icon={doctor.icon}
          ></FontAwesomeIcon>
        </div>
        <div style={{ fontSize: "12px" }} className="text-secondary">
          {doctor.phone}
        </div>
      </div>
    </div>
  );
};

export default OurDoctorsDetail;
