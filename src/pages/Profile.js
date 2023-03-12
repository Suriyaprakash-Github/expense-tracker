import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h1>Welcome to Expense Tracker</h1>
      <Link to="/updateprofile">Update Profile</Link>
      <Link to="/verify">Verify Email</Link>
    </>
  );
};
export default Profile;