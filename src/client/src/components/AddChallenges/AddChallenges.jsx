import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "../../utils/axiosInterceptor";

class AddChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        { id: 1, challenge_name: "abc1" },
        { id: 2, challenge_name: "abc2" },
        { id: 3, challenge_name: "abc3" }
      ],
      challenge: 0
    };
  }

  componentDidMount() {
    // call api to fetch challenges and set state
    axios
      .get("challenges")
      .then(response => {
        this.setState({ challenges: response.data.challenges });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
  };

  render() {
    const { challengeIds, addChallengeId } = this.props;
    const { challenge, challenges } = this.state;
    const selectedChallenges = challenges.filter(ch => {
      let found = false;
      challengeIds.forEach(id => {
        if (id === ch.id) {
          found = true;
        }
      });
      return found;
    });
    return (
      <>
        <div className="row">
          <div className="col-sm-3">Challenge Name</div>
          <div className="col-sm-4">
            <select
              value={challenge}
              name="challenge"
              onChange={this.handleChange}
              id="challenge"
              className="form-control"
            >
              <option>Choose...</option>
              {challenges &&
                challenges.map(c => (
                  <option key={c.id + "select_challenge"} value={c.id}>
                    {c.challenge_name}
                  </option>
                ))}
            </select>
          </div>
          <br />
          <br />
          <div className="col-sm-3">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => addChallengeId(challenge)}
            >
              Add Challenge
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul>
              {selectedChallenges &&
                selectedChallenges.map(cha => (
                  <li key={cha.id + "selected_challenge"}>
                    {cha.challenge_name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

AddChallenges.propTypes = {
  challengeIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  addChallengeId: PropTypes.func.isRequired
};

export default AddChallenges;
