import React from "react";

const BookingCard = (props) => {
  const { subject, visitingHour, totalSpace } = props.booking;
  return (
    <div className="col-md-4">
      <div className="card p-3 mt-5" style={{ width: "100%" }}>
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{subject}</h5>
          <h6>{visitingHour}</h6>
          <p>{totalSpace} SPACES AVAILABLE</p>
          <button className="btn btn-brand">BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
