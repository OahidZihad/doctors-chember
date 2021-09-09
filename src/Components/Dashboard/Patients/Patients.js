import React, { useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const Patients = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  useEffect(() => {
    fetch("https://mysterious-dawn-72386.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [selectedDate]);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 my-5 ms-5 ps-5">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-center" scope="col">
                  Sr No
                </th>
                <th className="text-secondary text-center" scope="col">
                  Name
                </th>
                <th className="text-secondary text-center" scope="col">
                  Gender
                </th>
                <th className="text-secondary text-center" scope="col">
                  Age
                </th>
                <th className="text-secondary text-center" scope="col">
                  Weight
                </th>
                <th className="text-secondary text-center" scope="col">
                  Phone
                </th>
                <th className="text-secondary text-center" scope="col">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{appointment.name}</td>
                  <td className="text-center">{appointment.gender}</td>
                  <td className="text-center">{appointment.age}</td>
                  <td className="text-center">{appointment.weight}KG</td>
                  <td className="text-center">{appointment.phone}</td>
                  <td className="text-center">{appointment.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Patients;
