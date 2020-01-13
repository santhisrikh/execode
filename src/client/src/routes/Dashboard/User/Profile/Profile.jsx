import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="row border-bottom">
        <h3 className="mb-4 mt-3 col-6 text-left">Profile</h3>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-4">
          <div className="mb-3">
            <img
              src="https://dummyimage.com/150x150/010101/aaa"
              alt="user profile"
              className="rounded-circle"
            />
          </div>
          <div>
            <h4>Mihir Kumar</h4>
            <h5 className="underline">Samurai</h5>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <table className="table table-bordered">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">Challenge Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Attempt</th>
              </tr>
            </thead>
            {/* dummy data will be replace later */}
            <tbody className="text-center">
              <tr>
                <td>
                  <p>Challenge - 1</p>
                </td>
                <td>
                  <p>19-12-2020</p>
                </td>
                <td>
                  <p>In complete</p>
                </td>
                <td>
                  <button type="button" className="btn btn-dark">
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
