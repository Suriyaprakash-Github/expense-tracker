import React, { useContext, useState } from "react";
import LoginContext from "../../store/LoginContext/login-context";
import classes from "./Verify.module.css";

const Verify = () => {
  const authCtx = useContext(LoginContext);
  const [verified, setVerified] = useState(false);

  if (authCtx.verified) {
    setVerified(true);
  }

  const sendVerificationEmail = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCtx.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
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
        authCtx.verified(true);

        console.log("requested email", data);
      });
  };
  const checkVerification = () => {
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
        authCtx.verified(true);
        console.log("Email Verification", data.users[0].emailVerified);
      });
  };
  return (
    <>
      <h1>Verify Your Email </h1>
      <div className={classes.signup_main_div}>
        {authCtx.verified ? (
          <button onClick={checkVerification}>Check Verification</button>
        ) : (
          <button onClick={sendVerificationEmail}>
            Send Verification Email
          </button>
        )}
      </div>
    </>
  );
};

export default Verify;
