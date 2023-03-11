import React, { useRef } from "react";
import classes from "./signUp.module.css";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.current.value === confirmPassword.current.value) {
      const signupDetails = {
        email: email.current.value,
        password: password.current.value,
      };
      console.log(signupDetails);

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("Signup Successful");
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        });

      //reset input
      email.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";
    } else return alert("Enter Password Correctly");
  };

  return (
    <>
      <div className={classes.signup_main_div}>
        <div>
          <form onSubmit={submitHandler} className={classes.signup_form_div}>
            <h2>Sign Up</h2>

            <div className={classes.signup_form_elements}>
              <label className={classes.signup_form_label} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                ref={email}
              />
            </div>

            <div className={classes.signup_form_elements}>
              <label htmlFor="password" className={classes.signup_form_label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                ref={password}
                minLength="7"
              />
            </div>

            <div className={classes.signup_form_elements}>
              <label
                htmlFor="confirm_password"
                className={classes.signup_form_label}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                placeholder="Re-Enter your Password"
                ref={confirmPassword}
              />
            </div>
            <button type="submit" className={classes.signup_form_button}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
