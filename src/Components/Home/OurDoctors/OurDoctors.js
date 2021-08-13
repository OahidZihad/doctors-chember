import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import doctor from "../../../images/doctor.png";
import OurDoctorsDetail from "../OurDoctorsDetail/OurDoctorsDetail";

const doctorsData = [
  {
    img: doctor,
    name: "Dr. Pritom",
    icon: faPhone,
    phone: "+88 017 52746973",
  },
  {
    img: doctor,
    name: "Dr. Pritom",
    icon: faPhone,
    phone: "+88 017 52746973",
  },
  {
    img: doctor,
    name: "Dr. Pritom",
    icon: faPhone,
    phone: "+88 017 52746973",
  },
];
const OurDoctors = () => {
  return (
    <section>
      <div className="mt-5 pt-5">
        <h5
          className="text-center"
          style={{ color: "#6ACECE", fontWeight: "bold" }}
        >
          OUR DOCTORS
        </h5>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          {doctorsData.map((doctor) => (
            <OurDoctorsDetail doctor={doctor}></OurDoctorsDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
