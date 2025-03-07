import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ token, setToken }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const logInUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const userData = await response.json();
      setToken(userData.token);
      
      } catch (e: any) {
        throw new Error(e.message || "Something has gone wrong. Please try again later");
      }
  };

  token && setTimeout(() => { navigate("/") }, 1500)

  return (
    <div className="home-block">
      <h1>Log In</h1>
      { !token ? 
        <form className="register-login-form" onSubmit={logInUser}>
          <label htmlFor="login-email-input">Email:</label>
          <input 
          name="email"
          id="login-email-input"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="login-password-input">Password:</label>
          <input 
          name="password"
          id="login-password-input"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button id="login-button" type="submit">Log In</button>
          <Link className="home-block-back-link" to="/" >Back to home</Link>
        </form>
      : <h2 id="registration-thank-you">Welcome Back! You will be redirected momentarily.</h2>}
    </div>
  )
}

export default Login;