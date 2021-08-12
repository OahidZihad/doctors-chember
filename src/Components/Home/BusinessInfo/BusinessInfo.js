import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Shukhnagar, Gaibandha - 5700",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+88-01752746973",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="row">
      {infosData.map((info) => (
        <InfoCard info={info}></InfoCard>
      ))}
    </section>
  );
};

export default BusinessInfo;
