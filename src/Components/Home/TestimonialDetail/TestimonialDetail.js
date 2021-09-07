import React from "react";

const TestimonialDetail = (props) => {
  const { description, img, name, address } = props.testimonial;
  return (
    <div className="col-md-4 mt-2">
    <div className="card">
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mx-3 mt-4 mb-4">
          <img
            style={{ height: "50px", width: "50px" }}
            src={img}
            className="card-img-bottom"
            alt="..."
          ></img>
        </div>
        <div className="mt-4 mb-4">
          <h6>{name}</h6>
          <p>{address}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialDetail;
