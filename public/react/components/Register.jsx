import React, { useState } from "react";
import apiURL from "../api";
import { useNavigate } from "react-router";

const Register = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(`${apiURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status != 200) {
        throw new Error(data.message);
      }
      navigate("/home");
      setEmail("");
      setPassword("");
      return;
    } catch (err) {
      console.error(err);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      <form
        className="flip-card-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Register</h2>
        <div className="input-field">
          <p className="background-grey">Name</p>
          <input
            id="name-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-field">
          <p className="background-grey">Email</p>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-field">
          <p className="background-grey">Password</p>
          <input
            id="password-input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className="flip-link-text">
          Already have an account?
          <a
            className="background-grey flip-link"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            {" Login"}
          </a>
        </p>
        <button className="login-button" type="submit">
          Create Account
        </button>
      </form>
    </>
  );
};

export default Register;
