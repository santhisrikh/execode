import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../../utils/axiosInterceptor";

class ChallengesPerContest extends React.Component {
  constructor() {
    super();
    this.state = {
      challenges: [
        {
          contest_challenge_id: 1,
          title: "Waiting Line",
          MaxScore: 20,
          difficulty: "Easy"
        },
        {
          contest_challenge_id: 2,
          title: "Use Side Lane",
          MaxScore: 35,
          difficulty: "Medium"
        },
        {
          contest_challenge_id: 3,
          title: "Height Of Trees",
          MaxScore: 60,
          difficulty: "Difficult"
        },
        {
          contest_challenge_id: 4,
          title: "Quick sort it",
          MaxScore: 35,
          difficulty: "Medium"
        },
        {
          contest_challenge_id: 5,
          title: "Dance Night",
          MaxScore: 20,
          difficulty: "Easy"
        }
      ]
    };
  }

  handleClick = e => {
    console.log(e.target.value);
    axios.post("").then(res => {
      console.log(res);
    });
  };

  render() {
    const { challenges } = this.state;
    return (
      <>
        {challenges.map(ele => {
          return (
            <div className="card col-md-6 mb-4" style={{ marginLeft: "400px" }}>
              <div className="card-body">
                <h3 className="card-title text-success">{ele.title}</h3>
                <div className="row">
                  <div className=" row col-8">
                    <p className="card-text text-muted col-4">
                      Max Score:
                      <strong className="text-dark">{ele.MaxScore}</strong>
                    </p>
                    <p className="card-text text-muted col-4 ">
                      Difficulty:
                      <strong className="text-dark">
                        {ele.difficulty}
                      </strong>{" "}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success border-secondary col-4"
                    value={ele.contest_challenge_id}
                    onClick={this.handleClick}
                  >
                    <Link to={`/contest_name/${ele.contest_challenge_id}`}>
                      Solve Challenge
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default ChallengesPerContest;
