import React from "react";
import doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <section className="d-flex justify-content-center appointment-section">
      <div className="w-75 row appointment">
        <div className="col-md-5">
          <img className="appointment-img" src={doctor} alt="" />
        </div>
        <div className="col-md-7">
          <h5
            className="mt-5 pt-2"
            style={{ color: "#6ACECE", opacity: ".8", fontWeight: "bold" }}
          >
            APPOINTMENT
          </h5>
          <h2 className="text-white mt-4" style={{ opacity: ".8" }}>
            Make an appointment <br />
            Today
          </h2>
          <p className="text-white mt-4 mb-3" style={{ opacity: ".8" }}>
            It is a long established fact that a reader will be distracted by
            the readable <br /> content of a page when looking at its
          </p>
          <button
            className="btn btn-primary mt-3 mb-3"
            style={{ opacity: ".8" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
