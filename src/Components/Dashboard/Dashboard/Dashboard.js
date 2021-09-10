import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import "./Dashboard.css";
import { UserContext } from "../../../App";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100vh",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [appointments, setAppointments] = useState([]);

  console.log(loggedInUser.email);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString());
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        date: selectedDate,
        email: sessionStorage.getItem("loggedInUser"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [selectedDate]);
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 d-flex justify-content-center calendar-height">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointment={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
