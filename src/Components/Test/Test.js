import React, { useContext } from "react";
import { UserContext } from "../../App";

const Test = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div>
      <h1>test {loggedInUser}</h1>
    </div>
  );
};

export default Test;
