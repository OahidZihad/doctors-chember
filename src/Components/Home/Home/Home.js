import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
