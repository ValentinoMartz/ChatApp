import React from "react";
import Add from "../img/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat n tino</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            type="file"
            id="file"
            placeholder="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
