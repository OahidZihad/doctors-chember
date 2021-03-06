import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const handleHome = () => {
    history.push("/home");
  };
  const handleDashboard = () => {
    history.push("/doctor/dashboard");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex">
            <h2 class="nav-link ms-5 active text-black" aria-current="page">
              {/* Name: {loggedInUser.name} */}
            </h2>
          </div>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link ms-5 active"
                aria-current="page"
                onClick={handleHome}
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link ms-5" href="#services">
                Dental Services
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                onClick={handleDashboard}
                style={{ cursor: "pointer" }}
              >
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#reviews">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#blog">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#contactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
