import React, { Component } from "react";

class ChallengeSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      time_limit: 100,
      memory_limit: 100
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Challenge Settings</h3>
        <br />

        <div className="form-group row">
          <div className="col-sm-6 col-md-3">
            <select
              value={this.state.language}
              name="language"
              onChange={this.handleChange}
              id="language"
              className="form-control"
            >
              <option selected>Choose Language...</option>
              <option value="Python">Python</option>
              <option value="Javascript">Javascript</option>
            </select>
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              id="time limit"
              value={this.state.time_limit}
              placeholder="Time LIMIT"
              name="time_limit"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              id="memory limit"
              value={this.state.memory_limit}
              placeholder="Memory Limit"
              name="memory_limit"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <button
              className="btn btn-primary btn-block"
              onClick={() => this.props.addSettings(this.state)}
            >
              Add Setting
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ul>
              {this.props.settings
                ? this.props.settings.map(setting => (
                    <li>
                      Language:{setting.language} | Time Limit:
                      {setting.time_limit} | Memory Limit:{setting.memory_limit}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeSettings;
