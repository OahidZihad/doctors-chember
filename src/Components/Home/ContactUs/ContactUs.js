import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="d-flex justify-content-center mt-5 pt-5">
      <div className="w-75 contact-us">
        <div className="text-center mt-5" style={{ opacity: ".9" }}>
          <h5 style={{ color: "#6ACECE" }}>CONTACT US</h5>
          <h2 className="text-white">Always Connect With Us</h2>
        </div>
        <div className="mx-5 px-5 my-3 pb-5">
          <form style={{ opacity: ".9" }}>
            <div className="form-group">
              <input
                type="email"
                class="form-control my-3"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                required
              />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control my-3"
                  id="formGroupExampleInput"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control my-3"
                  id="exampleFormControlTextarea1"
                  placeholder="Your Message"
                  required
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group text-center ">
                <button className="btn btn-primary " type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
