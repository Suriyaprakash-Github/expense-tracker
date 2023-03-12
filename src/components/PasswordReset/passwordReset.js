import React, { useContext, useRef } from "react";
// import LoginContext from "../../store/LoginContext/login-context";

const PasswordReset = () => {
  //   const authCtx = useContext(LoginContext);

  const emailEntered = useRef();

  const requestPasswordReset = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC415gt6s-Bwh87A8Renvlz03AmmWUJqrw",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: emailEntered.current.value,
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
            let errorMessage = data.error.message;
            alert(data.error.message);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div>
        <form onSubmit={requestPasswordReset}>
          <label htmlFor="email">Enter Your Email</label>
          <input type="email" id="email" ref={emailEntered} />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
};

export default PasswordReset;
