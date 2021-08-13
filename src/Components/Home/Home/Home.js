import React from "react";
import BlogNews from "../BlogNews/BlogNews";
import ContactUs from "../ContactUs/ContactUs";
import FeaturedService from "../FeaturedService/FeaturedService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import OurDoctors from "../OurDoctors/OurDoctors";
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
      <BlogNews></BlogNews>
      <OurDoctors></OurDoctors>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
