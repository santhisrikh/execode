import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="row border-bottom">
        <h5 className="lead mb-4 col-6 text-left"> Profile</h5>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt="user profile"
            className="rounded-circle "
          />
          <p>Mihir Kumar</p>
          <p>Samurai</p>
        </div>
        <div className="col-12 col-md-8">
          <table className="table table-bordered">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">Challenge Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {/* dummy data will be replace later */}
            <tbody>
              <tr>
                <td>
                  <p>Challenge - 1</p>
                </td>
                <td>
                  <p>19-12-2020</p>
                </td>
                <td>
                  <p>In complete</p>
                  <button type="button" className="btn btn-success">
                    Attempt Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
