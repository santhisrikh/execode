/*eslint-disable*/
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
    <div className="mb-4 mt-4">
      <div>
        <h4 className="text-center">Login To Execode</h4>
        <form onSubmit={onLoginSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              name="username"
              defaultValue={loginState.username}
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              name="password"
              defaultValue={loginState.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-2">
            <span>
              <input
                type="checkbox"
                name="keepLoggedIn"
                defaultValue={loginState.keepLoggedIn}
                onChange={onChange}
              />
              <small className="text-muted ml-2">Keep me logged in</small>
            </span>
          </div>
          <input
            type="submit"
            className="btn btn-dark btn-block btn-lg"
            defaultValue="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPublic;
