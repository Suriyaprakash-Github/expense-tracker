import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";
import LoginContext from "../store/LoginContext/login-context";

const Profile = () => {
  const [fetchedName, setFetchedName] = useState("");
  const authCtx = useContext(LoginContext);

  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Updation failed!";

          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      setFetchedName(data.users[0].displayName);
    });

  return (
    <>
      <div className={classes.profile_div}>
        <h1>Hi!! {fetchedName}, Welcome Again</h1>
        <Link to="/updateprofile">Update Profile</Link>
        <Link to="/verify">Verify Email</Link>
      </div>
    </>
  );
};
export default Profile;
