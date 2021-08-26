import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    console.log(data);

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eikhane res.json() likhle alert kaj kore na
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment Created Successfully");
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center">{appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="form-group  mb-3">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="form-group  mb-3">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group row mb-3">
            <div className="col-4">
              <select
                className="form-control form-select"
                {...register("gender", { required: true })}
              >
                <option selected disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn btn-brand">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
