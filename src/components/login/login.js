import React, { useState } from "react";
import CustomBtn from "../custom-button/custom-button";
import "./login.css";

import { connect } from "react-redux";
import { signInWithEmailStart, signInWithGoogleStart } from '../../redux/user/user-actions';

function Login({signInWithGoogleStart, signInWithEmailStart}) {

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = state;

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setState({
      ...state, 
      [name]: value,
    })
  }

  const loginWithEmail = async (event) => {
    event.preventDefault();
    signInWithEmailStart(email, password);
  }
  

  return (
    <div className="login-card">
      <span className="login-title">I already have an account</span>
      <span className="login-subtitle">Login with your email and password</span>
      <form method="POST"> 
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
        <div className="buttons">
          <CustomBtn className={'login'} type={'submit'} onClick={loginWithEmail}>Login</CustomBtn>
          <CustomBtn className={'login-google'} type="button" onClick={signInWithGoogleStart}>Login with google</CustomBtn>
        </div>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
  signInWithEmailStart: (email, password) => dispatch(signInWithEmailStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Login);



