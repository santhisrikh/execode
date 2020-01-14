import React, { Component } from "react";
import ChallengeDetails from "../../../../components/ChallengeDetails/ChallengeDetails";
import ChallengeSettings from "../../../../components/ChallengeSettings/ChallengeSettings";
import AddTestCases from "../../../../components/AddTestCases/AddTestCases";
import axios from "../../../../utils/axiosInterceptor";

const initialState = {
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
  settings: [],
  test_cases: [],
  test_input: [],
  test_output: []
};

class CreateChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleDetailsChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTestCase = testCase => {
    this.setState(state => {
      return {
        test_cases: [
          ...state.test_cases,
          {
            test_case_name: testCase.testCaseName,
            visibility: testCase.visibility,
            strength: 0
          }
        ],
        test_input: [...state.test_input, testCase.inputFile],
        test_output: [...state.test_output, testCase.outputFile]
      };
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
    const form = new FormData();
    // use new form data
    const data = {
      difficulty: this.state.difficulty,
      description: this.state.description,
      problem_statement: this.state.problem_statement,
      input_format: this.state.input_format,
      constraints: this.state.constraints,
      output_format: this.state.output_format
    };
    // call api

    // set to initial state on successfull response

    form.append("challenge_details", JSON.stringify(data));
    form.append("test_cases", JSON.stringify(this.state.test_cases));
    form.append("settings", JSON.stringify(this.state.settings));
    for (let a = 0; a < this.state.test_input.length; a++) {
      form.append(
        `test_case_input${a}`,
        this.state.test_input[a],
        this.state.test_input[a].name
      );
    }
    for (let b = 0; b < this.state.test_output.length; b++) {
      form.append(
        `test_case_output${b}`,
        this.state.test_output[b],
        this.state.test_output[b].name
      );
    }
    // console.log(form)
    axios.post(`/challenge/${this.state.challenge_name}`, form).then(res => {
      this.setState({ ...initialState });
    });
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
          challenge_name={challengeName}
          difficulty={difficulty}
          description={description}
          problem_statement={problemStatement}
          input_format={inputFormat}
          constraints={constraints}
          output_format={outputFormat}
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
          className="btn btn-dark btn-block"
        >
          Add Challenge
        </button>
      </div>
    );
  }
}

export default CreateChallenge;
