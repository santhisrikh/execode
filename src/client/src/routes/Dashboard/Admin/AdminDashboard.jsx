import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div>
        <div className="row border mb-3 mt-5">
          <div className="col-md-8">
            <div className="py-2">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3">
            <Link
              className="btn btn-dark btn-block btn-lg"
              to="/dashboard/admin/all-contest"
              role="button"
            >
              Contests
            </Link>
          </div>
        </div>
        <div className="row border mb-3 mt-4">
          <div className="col-md-8">
            <div className="py-2">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3">
            <Link
              className="btn btn-dark btn-block btn-lg"
              to="/dashboard/admin/create-contest"
              role="button"
            >
              Create Contest
            </Link>
          </div>
        </div>
        <div className="row border mb-3 mt-4">
          <div className="col-md-8">
            <div className="py-2">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3">
            <Link
              className="btn btn-dark btn-block btn-lg"
              to="/dashboard/admin/create-challenge"
              role="button"
            >
              Create Challenge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
