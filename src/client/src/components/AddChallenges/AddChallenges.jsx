import React, { Component } from "react";

class AddChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        { id: 1, challenge_name: "abc1" },
        { id: 2, challenge_name: "abc2" },
        { id: 3, challenge_name: "abc3" }
      ],
      challenge: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    // call api to fetch challenges and set state
  }

  render() {
    const { challenge, challenges } = this.state;
    const selected_challenges = challenges.filter(ch => {
      let found = false;
      this.props.challenge_ids.forEach(id => {
        if (id == ch.id) {
          found = true;
        }
      });
      return found;
    });
    return (
      <div className="row">
        <div className="col-sm-3">Contest Name</div>
        <div className="col-sm-4">
          <select
            value={challenge}
            name="challenge"
            onChange={this.handleChange}
            id="challenge"
            className="form-control"
          >
            <option selected>Choose...</option>
            {challenges &&
              challenges.map(c => (
                <option value={c.id}>{c.challenge_name}</option>
              ))}
          </select>
        </div>
        <br />
        <br />
        <div className="col-sm-3">
          <button
            className="btn btn-primary"
            onClick={() => this.props.addChallengeId(challenge)}
          >
            Add Challenge
          </button>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul>
              {selected_challenges &&
                selected_challenges.map(cha => <li>{cha.challenge_name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AddChallenges;
