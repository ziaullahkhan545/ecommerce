import React from 'react';
import Signup from '../../components/signup/signup';
import Login from '../../components/login/login';
import './signin.css';

function Signin() {
  return (
    <div className='container-fluid'>
      <div className='container center'>
        <div className='account-container center'>
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Signin;