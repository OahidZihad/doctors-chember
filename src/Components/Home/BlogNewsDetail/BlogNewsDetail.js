import React from "react";

const BlogNewsDetail = (props) => {
  const { img, description, name, date, title } = props.blog;
  return (
    <div className="card col-md-4 card-testimonial">
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
          <p>{date}</p>
        </div>
      </div>
      <div className="card-body">
        <p style={{ fontWeight: "600" }}>{title}</p>
        <p className="card-text text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default BlogNewsDetail;
