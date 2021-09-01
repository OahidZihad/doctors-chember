import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Test from "./Components/Test/Test";
import Test2 from "./Components/Test2/Test2";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
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
          <PrivateRoute path="/test">
            <Test></Test>
          </PrivateRoute>
          <PrivateRoute path="/test2">
            <Test2></Test2>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
