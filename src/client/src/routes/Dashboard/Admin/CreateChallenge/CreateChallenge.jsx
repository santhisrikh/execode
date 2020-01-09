import React, { Component } from "react";
import "./CreateChallenge.module.css";
import ChallengeDetails from "../../../../components/ChallengeDetails/ChallengeDetails";
import ChallengeSettings from "../../../../components/ChallengeSettings/ChallengeSettings";
import AddTestCases from "../../../../components/AddTestCases/AddTestCases";

class CreateChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsTab: true,
      settingsTab: false,
      testCasesTab: false,
      challenge_name: "",
      difficulty: "",
      description: "",
      problem_statement: "",
      input_format: "",
      constraints: "",
      output_format: "",
      test_cases: [],
      settings: []
    };
  }

  handleDetailsChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTestCase = test_case => {
    this.setState({
      test_cases: [...this.state.test_cases, test_case]
    });
  };

  addSettings = setting => {
    this.setState({
      settings: [...this.state.settings, setting]
    });
  };

  handleTabChange = tab => {
    if (tab === "details") {
      this.setState({
        detailsTab: true,
        settingsTab: false,
        testCasesTab: false
      });
    } else if (tab === "settings") {
      this.setState({
        detailsTab: false,
        settingsTab: true,
        testCasesTab: false
      });
    } else if (tab === "test") {
      this.setState({
        detailsTab: false,
        settingsTab: false,
        testCasesTab: true
      });
    }
  };

  createChallenge = () => {
    //   send data
    // use new form data
    // call api
    // set to initial state on successfull response
  };

  render() {
    const {
      detailsTab,
      settingsTab,
      testCasesTab,
      challenge_name,
      difficulty,
      description,
      problem_statement,
      input_format,
      constraints,
      output_format
    } = this.state;
    const details = {
      challenge_name,
      difficulty,
      description,
      problem_statement,
      input_format,
      constraints,
      output_format
    };
    return (
      <div className="container p-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              onClick={() => this.handleTabChange("details")}
              className={`nav-link ${detailsTab && "active"}`}
            >
              Details
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => this.handleTabChange("test")}
              className={`nav-link ${testCasesTab && "active"}`}
            >
              Test Cases
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => this.handleTabChange("settings")}
              className={`nav-link ${settingsTab && "active"}`}
            >
              Settings
            </button>
          </li>
        </ul>
        {detailsTab ? (
          <ChallengeDetails
            handleChange={this.handleDetailsChange}
            {...details}
          />
        ) : settingsTab ? (
          <ChallengeSettings
            addSettings={this.addSettings}
            settings={this.state.settings}
          />
        ) : (
          <AddTestCases
            test_cases={this.state.test_cases}
            addTestCase={this.addTestCase}
          />
        )}
        <button
          onClick={this.createChallenge}
          className="btn btn-success btn-block"
        >
          Add Challenge
        </button>
      </div>
    );
  }
}

export default CreateChallenge;
