import React, { useContext } from "react";
import { UserContext } from "../../App";

const Test2 = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div>
      <h2>email {loggedInUser}</h2>
    </div>
  );
};

export default Test2;
