import React, { Component } from "react";

class ChallengeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge_name: "",
      difficulty: "",
      description: "",
      problem_statement: "",
      input_format: "",
      constraints: "",
      output_format: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      challenge_name,
      difficulty,
      description,
      problem_statement,
      input_format,
      constraints,
      output_format
    } = this.props;

    return (
      <div className="mt-3">
        <h2>Add Challenge Details</h2>
        <br />
        <form>
          <div className="form-group row">
            <label htmlFor="challenge-name" className="col-sm-2 col-form-label">
              Challenge Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                onChange={this.props.handleChange}
                className="form-control"
                id="challenge-name"
                value={challenge_name}
                name="challenge_name"
              />
            </div>
            <label htmlFor="difficulty" className="col-sm-2 col-form-label">
              Difficulty
            </label>
            <div className="col-sm-4">
              <select
                value={difficulty}
                name="difficulty"
                onChange={this.props.handleChange}
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
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Description
            </label>
            <textarea
              value={description}
              name="description"
              onChange={this.props.handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </div>

          <div className="form-group row">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Problem Statement
            </label>
            <textarea
              value={problem_statement}
              name="problem_statement"
              onChange={this.props.handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </div>

          <div className="form-group row">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Input Format
            </label>
            <textarea
              value={input_format}
              name="input_format"
              onChange={this.props.handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </div>

          <div className="form-group row">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Constraints
            </label>
            <textarea
              value={constraints}
              name="constraints"
              onChange={this.props.handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </div>

          <div className="form-group row">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Output Format
            </label>
            <textarea
              value={output_format}
              name="output_format"
              onChange={this.props.handleChange}
              className="form-control"
              aria-label="With textarea"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ChallengeDetails;
