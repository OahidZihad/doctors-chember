import React, { useEffect, useState } from "react";
import OurDoctorsDetail from "../OurDoctorsDetail/OurDoctorsDetail";

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-dawn-72386.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

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
          {doctors.map((doctor) => (
            <OurDoctorsDetail
              key={doctor._id}
              doctor={doctor}
            ></OurDoctorsDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
