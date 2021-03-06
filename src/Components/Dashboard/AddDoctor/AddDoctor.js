import React, { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(info);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://mysterious-dawn-72386.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Doctor Added Successfully");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="navbar-style">
            <nav style={{ height: "70px" }} class="navbar navbar-light">
              <span
                style={{
                  color: "#33d4d1",
                  fontSize: "25px",
                  marginLeft: "20px",
                }}
                class="navbar-brand mb-0 h1"
              >
                Add a Doctor
              </span>
            </nav>
          </div>
          <div className="mt-3 mx-2 px-2">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleBlur}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Name"
                  onBlur={handleBlur}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="exampleInputPassword1">Upload Image</label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Picture"
                  onChange={handleFileChange}
                />
              </div>
              <br />
              <button
                // onClick={handleSubmit}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
