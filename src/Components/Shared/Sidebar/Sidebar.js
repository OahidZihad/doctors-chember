import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch("https://mysterious-dawn-72386.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: sessionStorage.getItem("loggedInUser") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsDoctor(data);
      });
  }, []);

  const handleDashboard = () => {
    history.push("/doctor/dashboard");
  };

  const handleAppointment = () => {
    history.push("/dashboard/appointment");
  };

  const handlePatients = () => {
    history.push("/doctor/patients");
  };

  const handlePrescriptions = () => {
    history.push("/doctor/prescriptions");
  };

  const handleAddDoctor = () => {
    history.push("/doctor/addDoctor");
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

        {isDoctor && (
          <div>
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
              <div
                style={{ cursor: "pointer" }}
                className="text-white"
                onClick={handleAddDoctor}
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
              </div>
            </li>
          </div>
        )}
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
