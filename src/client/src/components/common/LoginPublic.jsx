import React, { useState } from "react";

const LoginPublic = () => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
    keepLoggedIn: false
  });

  const onChange = e => {
    if (e.target.name === "keepLoggedIn") {
      setLoginState({ ...loginState, [e.target.name]: e.target.checked });
    } else {
      setLoginState({ ...loginState, [e.target.name]: e.target.value });
    }
  };

  const onLoginSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card p-4">
        <h2 className="lead text-center">Login To Execode</h2>
        <form onSubmit={onLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                name="username"
                value={loginState.username}
                onChange={onChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                name="password"
                value={loginState.password}
                onChange={onChange}
              />
            </label>
          </div>
          <div className="form-group mt-2">
            <span className="d-flex align-items-center">
              <input
                type="checkbox"
                name="keepLoggedIn"
                value={loginState.keepLoggedIn}
                onChange={onChange}
              />
              <small className="text-muted ml-2">Keep me logged in</small>
            </span>
          </div>
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPublic;
