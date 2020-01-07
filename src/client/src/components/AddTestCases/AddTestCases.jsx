import React, { Component } from "react";

class AddTestCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test_case_name: "",
      visibility: false,
      input_file: null,
      output_file: null,
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
    const { test_case_name, visibility, strength } = this.state;
    const { test_cases } = this.props;
    return (
      <div className="p-3">
        <div className="form-group row">
          <label htmlFor="challenge-name" className="col-sm-2 col-form-label">
            Test Case Name
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="challenge-name"
              value={test_case_name}
              name="test_case_name"
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="challenge-name" className="col-sm-2 col-form-label">
            Strength
          </label>
          <div className="col-sm-3">
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
            <input
              className="form-check-input"
              type="checkbox"
              id="Visibility"
              onChange={this.handleChange}
              name="visibility"
              value={visibility}
            />
            <label className="form-check-label" htmlFor="Visibility">
              Visibility
            </label>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                name="input_file"
                onChange={this.handleFiles}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose Input file
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                name="output_file"
                onChange={this.handleFiles}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose Output file
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => this.props.addTestCase(this.state)}
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
            <tr>
              <th scope="row">1</th>
              {test_cases
                ? test_cases.map(t_case => (
                    <>
                      <td>{t_case.input_file.name}</td>
                      <td>{t_case.output_file.name}</td>
                      <td>{t_case.test_case_name}</td>
                      <td>{t_case.strength}</td>
                      <td>No actions yet</td>
                      <td>{t_case.visibility ? "Visible" : "Not Visible"}</td>
                    </>
                  ))
                : null}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddTestCases;
