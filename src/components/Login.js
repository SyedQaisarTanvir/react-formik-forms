import React, { useState } from "react";
import "../Login.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login__top">
          <h3>Login</h3>
          <div className="login__control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email ..."
              name="email"
              value={user.email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="login__control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password ..."
              name="password"
              value={user.password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>

        <div className="login__bottom">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
