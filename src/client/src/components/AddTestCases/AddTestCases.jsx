import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTestCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testCaseName: "",
      visibility: true,
      inputFile: null,
      outputFile: null,
      strength: 0
    };
  }

  handleChange = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };

  handleFiles = e => {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };

  render() {
    const { testCaseName, visibility, strength } = this.state;
    const { test_cases: testCases, addTestCase } = this.props;
    return (
      <div className="p-3">
        <div className="form-group row">
          <div className="col-sm-3">
            <label
              htmlFor="challenge-name"
              className="col-sm-2 col-form-label"
            />
            Test Case Name
            <input
              type="text"
              className="form-control"
              id="challenge-name"
              value={testCaseName}
              name="testCaseName"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-3">
            <label
              htmlFor="challenge-name"
              className="col-sm-2 col-form-label"
            />
            Strength
            <input
              type="text"
              className="form-control"
              id="strength"
              value={strength}
              onChange={this.handleChange}
              name="strength"
            />
          </div>
          <div className="col-sm-2">
            <label className="form-check-label" htmlFor="Visibility" />
            <input
              className="form-check-input"
              type="checkbox"
              id="Visibility"
              onChange={this.handleChange}
              name="visibility"
              value={visibility}
            />
            Visibility
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <div className="custom-file">
              <label className="custom-file-label" htmlFor="customFile" />
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                name="inputFile"
                onChange={this.handleFiles}
              />
              Choose Input file
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <div className="custom-file">
              <label className="custom-file-label" htmlFor="customFile" />
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                name="outputFile"
                onChange={this.handleFiles}
              />
              Choose Output file
            </div>
          </div>
        </div>
        <button
          onClick={() => addTestCase(this.state)}
          type="button"
          className="btn btn-primary btn-lg btn-block"
        >
          Add Test Case
        </button>
        <hr />

        {/* Table */}
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Input</th>
              <th scope="col">Output</th>
              <th scope="col">Name</th>
              <th scope="col">Strengths</th>
              <th scope="col">Action</th>
              <th scope="col">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {testCases
              ? testCases.map((tCase, ind) => (
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{tCase.inputFile.name}</td>
                    <td>{tCase.outputFile.name}</td>
                    <td>{tCase.testCaseName}</td>
                    <td>{tCase.strength}</td>
                    <td>No actions yet</td>
                    <td>{tCase.visibility ? "Visible" : "Not Visible"}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

AddTestCases.propTypes = {
  addTestCase: PropTypes.func.isRequired,
  test_cases: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default AddTestCases;
