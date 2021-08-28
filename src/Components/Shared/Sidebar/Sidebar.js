import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const history = useHistory();

  const handleDashboard = () => {
    history.push("/doctor/dashboard");
  };

  const handleAppointment = () => {
    history.push("/doctor/appointment");
  };

  const handlePatients = () => {
    history.push("/doctor/patients");
  };

  const handlePrescriptions = () => {
    history.push("/doctor/prescriptions");
  };

  const handleSettings = () => {
    history.push();
  };
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleDashboard}
          >
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </div>
        </li>
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleAppointment}
          >
            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
          </div>
        </li>
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handlePatients}
          >
            <FontAwesomeIcon icon={faUsers} /> <span>Todays Patients</span>
          </div>
        </li>
        <li>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handlePrescriptions}
          >
            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
          </div>
        </li>
        <li>
          <Link to="/doctor/setting" className="text-white"></Link>
          <div
            style={{ cursor: "pointer" }}
            className="text-white"
            onClick={handleSettings}
          >
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </div>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white"></Link>
        <div
          style={{ cursor: "pointer" }}
          className="text-white"
          onClick={handleSettings}
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
