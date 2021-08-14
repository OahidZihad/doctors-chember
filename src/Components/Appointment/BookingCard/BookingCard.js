import React, { useState } from "react";
import AppointmentForm from "../../AppointmentForm/AppointmentForm";

const BookingCard = (props) => {
  const { subject, visitingHour, totalSpace } = props.booking;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4">
      <div className="card p-3 mt-5" style={{ width: "100%" }}>
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{subject}</h5>
          <h6>{visitingHour}</h6>
          <p>{totalSpace} SPACES AVAILABLE</p>
          <button onClick={openModal} className="btn btn-brand text-white">
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={subject}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
