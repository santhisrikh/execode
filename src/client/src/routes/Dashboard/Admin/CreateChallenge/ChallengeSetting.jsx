import React from "react";

const language = ["Java", "C++", "Python", "Javascript(Node.js)"];

const ChallengeSettings = () => {
  return (
    <div className="container p-1">
      {/* inner navbar */}
      <div className="row p-2 mx-3 ">
        <h4>Settings</h4>
      </div>
      {/* content  */}
      <div className="p-2">
        <div className="d-flex justify-content-end p-1 mb-3">
          <button type="button" className="btn btn-dark">
            Create Challange
          </button>
        </div>
        <div className="border border-dark p-4">
          <div className="row">
            <button type="button" className="btn btn-dark p-2 col-2 mx-1">
              Details
            </button>
            <button type="button" className="btn btn-dark p-2 col-2 mx-1">
              Test Cases
            </button>
            <button type="button" className="btn btn-dark p-2 col-2 mx-1">
              Sign Ups
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 col-12">
              <select
                name="language"
                className="custom-select font-weight-bold"
              >
                <option defaultValue>Language</option>
                {language.map(lang => {
                  return (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button type="button" className="btn btn-secondary col-md-12">
                Time limit
              </button>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button type="button" className="btn btn-secondary col-md-12">
                Memory limit
              </button>
            </div>
            <div className="col-md-3 col-12 my-1">
              <button type="button" className="btn btn-dark col-md-12">
                Add
              </button>
            </div>
            <h5 className="my-3 mx-3">Time Limit Memory Table</h5>
            <div className="col-md-12">
              {/* table here */}
              <textarea className="form-control" rows="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSettings;
