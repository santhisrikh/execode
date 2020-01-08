import React from "react";

const TodayContest = () => {
  return (
    <div>
      <h4 className="lead ml-4">Today Contest</h4>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container  border  bg-light shadow">
              <div className="row  mt-3 ">
                <div className="col-8">
                  <div className="row p-3">
                    <h3 className="lead">Contest Name</h3>
                  </div>
                  <div className="row mb-2">
                    <div className="col-4 border-right">Start Time</div>
                    <div className="col-4 border-right">End Time</div>
                    <div className="col-4 ">Date</div>
                  </div>
                </div>
                <div className="col-4 p-3">
                  <button
                    type="submit"
                    className="btn btn-success btn-block px-2"
                  >
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h4 className="lead ml-4">All Contests</h4>
    </div>
  );
};

export default TodayContest;
