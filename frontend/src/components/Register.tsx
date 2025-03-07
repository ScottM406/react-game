import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface RegisterProps {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const Register: React.FC<RegisterProps> = ({ token, setToken }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation]= useState<string>("")
  const navigate = useNavigate();

  const registerNewUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === passwordConfirmation) {
      try {
      const response = await fetch('http://localhost:3000/register', {
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
    } else {
      alert("Passwords do not match.")
    }
  };

  token && setTimeout(() => { navigate("/") }, 1500)

  return (
    <div className="home-block">
      <h1>Register</h1>
      { !token ? 
        <form className="register-login-form" onSubmit={registerNewUser}>
          <label htmlFor="register-email-input">Email:</label>
          <input 
          name="email"
          id="register-email-input"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="register-password-input">Password:</label>
          <input 
          name="password"
          id="register-password-input"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="register-password-confirmation-input">Confirm Password:</label>
          <input 
          name="password-confirmation"
          id="register-password-confirmation-input"
          type="password"
          autoComplete="none"
          required
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button id="register-button" type="submit">Register</button>
          <Link className="home-block-back-link" to="/" >Back to home</Link>
        </form>
      : <h2 id="registration-thank-you">Thank you for registering! You will be redirected momentarily.</h2>}
    </div>
  )
}

export default Register;