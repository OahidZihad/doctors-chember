import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import DashboardMain from "./Components/Dashboard/DashboardMain/DashboardMain";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log("app.js loggedInUser", loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/doctor/patients">
            <Patients></Patients>
          </PrivateRoute>
          <PrivateRoute path="/doctor/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <PrivateRoute path="/doctor/dashboard">
            <DashboardMain></DashboardMain>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
