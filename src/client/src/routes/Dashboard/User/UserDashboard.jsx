import React from "react";
// import Axios from "../../../../utils/axiosInterceptor"
class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userLeaderboard: [
        {
          name: '',
          score: '',
          rank: '',
          testCases:''
        }
      ]
    };
  }

  render() {
    const { userLeaderboard } = this.state;
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
                <th scope="col">name</th>
                <th scope="col">score</th>
                <th scope="col">testcases</th>
                <th scope="col">rank</th>
              </tr>
            </thead>
            <tbody>
              {userLeaderboard.map(ele => {
                return (
                  <tr>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.name}</td>
                    <td>{ele.score}</td>
                    <td>{ele.testcases}</td>
                    <td>{ele.rank}</td>
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

export default UserDashboard;
