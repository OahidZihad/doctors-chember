import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

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
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center">{appointmentOn}</h2>
        <div>I am a modal</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
