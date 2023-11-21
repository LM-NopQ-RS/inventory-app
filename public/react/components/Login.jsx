
import React, { useState } from 'react';
import apiURL from '../api';

const Login = ({ isLogin }) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    function handleSubmit (e){
        try {
            e.preventDefault()
        } catch (err) {

        }
    }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div>
          <p>Email</p>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            id="password-input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p>
          Dont have an account?
          <a onClick={setIsLogin(false)}>Sign up</a>
        </p>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};


module.exports = Login;