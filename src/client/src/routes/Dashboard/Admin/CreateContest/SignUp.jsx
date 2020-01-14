/*eslint-disable*/

import React from "react";

const SignUp = () => {
  return (
    <div className="container">
      <div className="mt-4 mb-4 text-center">
        <h4>Create Account</h4>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-dark btn-block">
          Create An Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
