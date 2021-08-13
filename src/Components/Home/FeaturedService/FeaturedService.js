import React from "react";
import dentalCare from "../../../images/Dental Care.png";

const FeaturedService = () => {
  return (
    <section className="d-flex justify-content-center mt-5 pt-5">
      <div className="w-75 row px-5">
        <div className="col-md-5">
          <img
            style={{ height: "400px", width: "350px" }}
            src={dentalCare}
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h2 style={{ color: "#3E465A" }}>
            Exceptional Dental <br />
            Care, on Your Terms
          </h2>
          <p className="text-secondary mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            iste, laboriosam eaque deleniti molestias nostrum id labore,
            corporis delectus nam dicta recusandae? Obcaecati optio doloribus,
            dolorem quia facere laboriosam illum voluptas eius inventore vero
            perspiciatis, nam assumenda sapiente perferendis. Quidem iste ut
            perferendis soluta? Expedita voluptate amet, quis quod
            necessitatibus quia sed nisi ut aliquid fugiat, ab itaque eligendi
            soluta. necessitatibus quia sed nisi ut aliquid fugiat, ab itaque
            eligendi soluta. Expedita voluptate amet, quis quod
          </p>
          <button className="btn btn-primary mt-4">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
