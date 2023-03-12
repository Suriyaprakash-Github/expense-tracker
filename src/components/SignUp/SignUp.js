import React, { useContext, useRef, useState } from "react";
import classes from "./signUp.module.css";
import { useNavigate } from "react-router-dom";

import LoginContext from "../../store/LoginContext/login-context";

const SignUp = () => {
  const authCtx = useContext(LoginContext);

  const [isLogin, setIsLogin] = useState(false);
  const redirect = useNavigate();

  const emailEntered = useRef();
  const passwordEntered = useRef();
  const confirmPasswordEntered = useRef();

  const loginSwitch = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // signup component
      if (
        passwordEntered.current.value === confirmPasswordEntered.current.value
      ) {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
          {
            method: "POST",
            body: JSON.stringify({
              email: emailEntered.current.value,
              password: passwordEntered.current.value,
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
            authCtx.login(data.idToken, data.email);
            redirect("/welcome");
          });

        emailEntered.current.value = "";
        passwordEntered.current.value = "";
        confirmPasswordEntered.current.value = "";
      } else return alert("Password Does Not Match");
    } else {
      // login component
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailEntered.current.value,
            password: passwordEntered.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            console.log("Login Successful from signup comp");

            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = data.error.message;
              alert(errorMessage);
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken, data.email);
          redirect("/welcome");
        });

      //reset input
      emailEntered.current.value = "";
      passwordEntered.current.value = "";
    }
  };

  return (
    <>
      <div className={classes.signup_main_div}>
        {!isLogin ? <h2>Sign Up</h2> : <h2>Login</h2>}
        <div>
          <form onSubmit={submitHandler} className={classes.signup_form_div}>
            <div className={classes.signup_form_elements}>
              <label className={classes.signup_form_label} htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                ref={emailEntered}
                required
              />
            </div>

            <div className={classes.signup_form_elements}>
              <label htmlFor="password" className={classes.signup_form_label}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                ref={passwordEntered}
                minLength="7"
                required
              />
            </div>
            {!isLogin && (
              <div className={classes.signup_form_elements}>
                <label
                  htmlFor="confirm_password"
                  className={classes.signup_form_label}
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  placeholder="Re-Enter your Password"
                  ref={confirmPasswordEntered}
                  required
                />
              </div>
            )}
            {!isLogin ? (
              <button type="submit" className={classes.signup_form_button}>
                Sign Up
              </button>
            ) : (
              <button type="submit" className={classes.signup_form_button}>
                Login
              </button>
            )}
          </form>
        </div>
        {!isLogin && (
          <button onClick={loginSwitch} className={classes.signup_form_button}>
            Already Have an Account?
          </button>
        )}
        {isLogin && (
          <button onClick={loginSwitch} className={classes.signup_form_button}>
            First time Here?
          </button>
        )}
        <a href="/reset">
          <button className={classes.signup_form_button}>
            Forgot Password?
          </button>
        </a>
      </div>
    </>
  );
};

export default SignUp;
