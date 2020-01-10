import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <img
            src="https://dummyimage.com/100x100/000/fff"
            className="rounded mx-auto d-block img-thumbnail"
            alt="profile pic"
          />
          <h1 className="font-weight-bold mt-2">Username</h1>
          <p className="lead">Cohort_3</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
