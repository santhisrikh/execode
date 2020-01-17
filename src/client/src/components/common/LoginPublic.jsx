/*eslint-disable*/
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../redux/authentication/actions";
import { connect } from "react-redux";

const LoginPublic = ({ loginUser, isAuth, token }) => {
  const [loginState, setLoginState] = useState({
    email: "",
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
    let payload = {
      email: loginState.email,
      password: loginState.password
    };
    loginUser(payload);
  };
  return isAuth ? (
    <Redirect to="/dashboard" />
  ) : (
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
              name="email"
              value={loginState.username}
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
              value={loginState.password}
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
          <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 m-auto">
            <input
              type="submit"
              className="btn btn-dark btn-block btn-xs"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  isLoading: state.authReducer.isLoading,
  token: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
  loginUser: payload => dispatch(loginUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPublic);
