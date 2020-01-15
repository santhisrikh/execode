/*eslint-disable*/
import React, { Component } from "react";
import AddContestDetails from "../../../../components/AddContestDetails/AddContestDetails";
import AddChallenges from "../../../../components/AddChallenges/AddChallenges";
import axios from "../../../../utils/axiosInterceptor";

const initialState = {
  detailsTab: true,
  challengesTab: false,
  contest_name: "",
  start_date: "",
  start_time: "",
  end_date: "",
  end_time: "",
  details: "",
  show_leaderboard: false,
  challenge_ids: []
};

class CreateContest extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addChallengeId = id => {
    this.setState({
      challenge_ids: [...this.state.challenge_ids, id]
    });
  };

  handleTabChange = tab => {
    if (tab === "details") {
      this.setState({
        detailsTab: true,
        challengesTab: false
      });
    } else if (tab === "challenges") {
      this.setState({
        detailsTab: false,
        challengesTab: true
      });
    }
  };

  handleDetailsChange = event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };

  createConest = () => {
    //   send the data here
    const { contest_name } = this.state;
    const data = this.state;
    // remove some of the unwanted data. sending unwanted data
    axios.post(`contest/${contest_name}`, data).then(response => {
      this.setState({ ...initialState });
    });
  };

  render() {
    const {
      detailsTab,
      challengesTab,
      contest_name,
      start_date,
      start_time,
      end_date,
      end_time,
      details,
      show_leaderboard
    } = this.state;
    const contest_details = {
      contest_name,
      start_date,
      start_time,
      end_date,
      end_time,
      details,
      show_leaderboard
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
              onClick={() => this.handleTabChange("challenges")}
              className={`nav-link ${challengesTab && "active"}`}
            >
              Challenges
            </button>
          </li>
        </ul>
        <h3>Add Contest Details & Challenges</h3>

        {detailsTab ? (
          <AddContestDetails
            handleDetailsChange={this.handleDetailsChange}
            {...contest_details}
          />
        ) : (
          <AddChallenges
            addChallengeId={this.addChallengeId}
            challengeIds={this.state.challenge_ids}
          />
        )}
        <br />
        <br />
        <button onClick={this.createConest} className="btn btn-dark btn-block">
          Add Challenge
        </button>
      </div>
    );
  }
}

export default CreateContest;
