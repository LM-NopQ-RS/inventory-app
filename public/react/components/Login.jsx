
import React, { useState } from 'react';
import apiURL from '../api';
import { useNavigate } from "react-router";

const Login = ({ isLogin }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    async function handleSubmit (e){
        try {
            e.preventDefault()
            const response = await fetch(`${apiURL}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await response.json();
            if (data === "Invalid user" || data === "Incorrect password"){
                console.log(data);
            }
            else{ navigate("/")}
        } catch (err) {
            console.log(err);
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