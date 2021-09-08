import React from "react";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import cavity from "../../../images/cavity.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sapiente elit. Soluta, sapiente",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#53DDD7" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3E465A" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail key={service.name} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
