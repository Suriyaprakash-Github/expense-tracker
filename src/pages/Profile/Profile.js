import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";
import LoginContext from "../../store/LoginContext/login-context";

const Profile = () => {
  const [fetchedName, setFetchedName] = useState("");
  const authCtx = useContext(LoginContext);

  const [subs, setSubs] = useState(authCtx.subscribed);

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

  const premiumHandler = () => {
    authCtx.premium(!subs);
    setSubs(!subs);
  };

  const themeHandler = () => {
    // var element = document.body;
    const element = document.querySelector(":root");
    element.classList.toggle("dark-mode");
  };

  return (
    <>
      <div className={classes.profile_div}>
        <h1>Hi!! {fetchedName}, Welcome Again</h1>
        <Link to="/updateprofile">Update Profile</Link>
        <Link to="/verify">Verify Email</Link>
        {subs ? (
          <button>Premium</button>
        ) : (
          <button onClick={premiumHandler}> Activate Premium </button>
        )}

        {subs && <button onClick={themeHandler}>Toggle Theme</button>}
      </div>
    </>
  );
};
export default Profile;
