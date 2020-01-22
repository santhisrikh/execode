import React from "react";
import { Link, NavLink } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInterceptor";

class ContestLeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      leaderboard: [
        {
          name: "Santhisri",
          score: "200",
          rank: "5",
          contest_name: "samurai-1.2.2",
          userId: 1
        }
      ]
    };
  }

  getLeaderBoardData = () => {
    // get the leader board data and set state
    // set auth header
    const { contestId } = this.props;
    axiosInstance.get(`contest/${contestId}/leaderboard`).then(res => {
      if (res.data && res.data.leaderboard) {
        this.setState({ leaderboard: res.data.leaderboard });
      }
    });
  };

  componentDidMount() {
    //
    this.getLeaderBoardData();
  }

  render() {
    const { leaderboard } = this.state;
    console.log(this.props.contestId);
    return (
      <>
        <div className="row d-flex justify-content-center">
          <table
            className="table table-striped text-center border border-success col-md-8 "
            style={{ marginTop: "100px" }}
          >
            <thead>
              <tr className="p-3 mb-2 bg-info text-white">
                {/* <th scope="col">S.no</th> */}
                <th scope="col">Username</th>
                <th scope="col">Score</th>
                <th scope="col">Rank</th>
                <th scope="col">Submission</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(ele => {
                return (
                  <tr key={"leaderboard" + ele.id}>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.name}</td>
                    <td>{ele.score}</td>
                    <td>{ele.rank}</td>
                    <td>
                      <Link
                        to={`/dashboard/admin/${this.props.contestId}/user-submission/${ele.id}`}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ContestLeaderBoard;
