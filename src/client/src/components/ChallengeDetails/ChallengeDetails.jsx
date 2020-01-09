import React from "react";
import PropTypes from "prop-types";

const ChallengeDetails = ({
  challengeName,
  difficulty,
  description,
  problemStatement,
  inputFormat,
  constraints,
  outputFormat,
  handleChange
}) => {
  return (
    <div className="mt-3">
      <h2>Add Challenge Details</h2>
      <br />
      <form>
        <div className="form-group row">
          <div className="col-sm-4">
            <label htmlFor="challenge-name" className="col-sm-2 col-form-label">
              Challenge Name
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="challenge-name"
                value={challengeName}
                name="challengeName"
              />
            </label>
          </div>
          <div className="col-sm-4">
            <label htmlFor="difficulty" className="col-sm-2 col-form-label">
              difficulty
              <select
                value={difficulty}
                name="difficulty"
                onChange={handleChange}
                id="difficulty"
                className="form-control"
              >
                <option selected>Choose...</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-3 col-form-label">
            Description
            <textarea
              value={description}
              id="description"
              name="description"
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </label>
        </div>

        <div className="form-group row">
          <label htmlFor="problemStatement" className="col-sm-3 col-form-label">
            Problem Statement
            <textarea
              value={problemStatement}
              name="problemStatement"
              id="problemStatement"
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </label>
        </div>

        <div className="form-group row">
          <label htmlFor="inputFormat" className="col-sm-3 col-form-label">
            Input Format
            <textarea
              value={inputFormat}
              name="inputFormat"
              id="inputFormat"
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </label>
        </div>

        <div className="form-group row">
          <label htmlFor="constraints" className="col-sm-3 col-form-label">
            Constraints
            <textarea
              value={constraints}
              name="constraints"
              id="constraints"
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </label>
        </div>

        <div className="form-group row">
          <label htmlFor="outputFormat" className="col-sm-3 col-form-label">
            Output Format
            <textarea
              value={outputFormat}
              name="outputFormat"
              id="outputFormat"
              onChange={handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

ChallengeDetails.propTypes = {
  challengeName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  problemStatement: PropTypes.string.isRequired,
  inputFormat: PropTypes.string.isRequired,
  constraints: PropTypes.string.isRequired,
  outputFormat: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ChallengeDetails;
