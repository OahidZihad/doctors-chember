import React from "react";

const AppointmentsByDate = ({ appointment }) => {
  //   const appointments = props.appointment;
  console.log(appointment);
  return (
    <div>
      <h1>Appointments: {appointment.length}</h1>
      {appointment.map((app) => (
        <li key={app._id}>
          {app.name} ~ {app.email} ~ {app.phone}
        </li>
      ))}
    </div>
  );
};

export default AppointmentsByDate;
