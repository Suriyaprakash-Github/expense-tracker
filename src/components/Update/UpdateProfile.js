import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginContext from "../../store/LoginContext/login-context";
import classes from "./UpdateProfile.module.css";

const UpdateProfile = () => {
  const authCtx = useContext(LoginContext);

  const redirect = useNavigate();

  const fullnameEntered = useRef();
  const [fetchedName, setFetchedName] = useState("");
  const updateHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          displayName: fullnameEntered.current.value,
          returnSecureToken: true,
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
        const updateName = data.displayName;
        console.log(`Fullname has been Updated to ${updateName}`);
        redirect("/welcome");
      });
  };
  // getting user details:
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
      <h1>Update Your Profile </h1>
      <div className={classes.signup_main_div}>
        <form onSubmit={updateHandler} className={classes.signup_form_div}>
          <div className={classes.signup_form_elements}>
            <label className={classes.signup_form_label} htmlFor="fullname">
              Fullname:
            </label>
            <input
              type="text"
              id="fullname"
              placeholder={fetchedName}
              ref={fullnameEntered}
              required
            />
          </div>
          <button type="submit" className={classes.signup_form_button}>
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
