import React from "react";
// import Axios from "../../../../utils/axiosInterceptor"
class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userLeaderboard: [
        {
          name: "testing",
          score: "212",
          rank: "31",
          testCases: "312"
        }
      ]
    };
  }

  render() {
    const { userLeaderboard } = this.state;
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#rank</th>
                <th scope="col">name</th>
                <th scope="col">score</th>
                <th scope="col">testcases</th>
              </tr>
            </thead>
            <tbody>
              {userLeaderboard.map(ele => {
                return (
                  <tr key={ele.id}>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.rank}</td>
                    <td>{ele.name}</td>
                    <td>{ele.score}</td>
                    <td>{ele.testcases}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
