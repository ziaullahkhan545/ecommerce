import React, { useState } from "react";
import CustomBtn from "../custom-button/custom-button";
import "./signup.css";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-actions";

function Signup({signUpStart}) {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { displayName, email, password, cpassword } = state;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== cpassword) {
      alert("password must match");
      return;
    }

    if (
      displayName === "" ||
      email === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("all fields must be filled");
      return;
    }
    signUpStart({email, password, displayName});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="login-card">
      <span className="login-title">I don't have an account</span>
      <span className="login-subtitle">
        Signup with your email and password
      </span>
      <form method="POST">
        <div className="input-field">
          <input
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
            placeholder="enter your name"
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="enter your email"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="enter your password"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            name="cpassword"
            value={cpassword}
            onChange={handleChange}
            placeholder="confirm your password"
          />
        </div>
        <div className="buttons-signup">
          <CustomBtn className={"signup"} type="submit" onClick={handleSubmit}>
            Signup
          </CustomBtn>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProp = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProp)(Signup);
