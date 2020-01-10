import React, { Component } from "react";
import "./CreateChallenge.module.css";
import ChallengeDetails from "../../../../components/ChallengeDetails/ChallengeDetails";
import ChallengeSettings from "../../../../components/ChallengeSettings/ChallengeSettings";
import AddTestCases from "../../../../components/AddTestCases/AddTestCases";

class CreateChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsTab: false,
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

  addTestCase = testCase => {
    this.setState(state => {
      return { testCases: [...state.testCases, testCase] };
    });
  };

  addSettings = setting => {
    this.setState(state => {
      return { settings: [...state.settings, setting] };
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
      challenge_name: challengeName,
      difficulty,
      description,
      problem_statement: problemStatement,
      input_format: inputFormat,
      constraints,
      output_format: outputFormat,
      settings,
      test_cases: testCases
    } = this.state;
    let viewTab;
    if (detailsTab) {
      viewTab = (
        <ChallengeDetails
          handleChange={this.handleDetailsChange}
          challengeName={challengeName}
          difficulty={difficulty}
          description={description}
          problemStatement={problemStatement}
          inputFormat={inputFormat}
          constraints={constraints}
          outputFormat={outputFormat}
        />
      );
    } else if (settingsTab) {
      viewTab = (
        <ChallengeSettings addSettings={this.addSettings} settings={settings} />
      );
    } else {
      viewTab = (
        <AddTestCases test_cases={testCases} addTestCase={this.addTestCase} />
      );
    }
    return (
      <div className="container p-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              type="button"
              onClick={() => this.handleTabChange("details")}
              className={`nav-link ${detailsTab && "active"}`}
            >
              Details
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              onClick={() => this.handleTabChange("test")}
              className={`nav-link ${testCasesTab && "active"}`}
            >
              Test Cases
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              onClick={() => this.handleTabChange("settings")}
              className={`nav-link ${settingsTab && "active"}`}
            >
              Settings
            </button>
          </li>
        </ul>
        {viewTab}
        <button
          type="button"
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
