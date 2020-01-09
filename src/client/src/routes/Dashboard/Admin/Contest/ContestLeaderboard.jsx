import React from "react";
import Axios from "../../../../utils/axiosInterceptor"

class ContestLeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      submissions: [
        {
          id: 1,
          name: "santhi",
          marks_scored: 30,
          rank: 5
        },
        {
          id: 2,
          name: "Ashish",
          marks_scored: 60,
          rank: 1
        },
        {
          id: 3,
          name: "Harshith",
          marks_scored: 50,
          rank: 2
        },
        {
          id: 4,
          name: "Sachin",
          marks_scored: 55,
          rank: 1
        }
      ]
    };
  }
  

  render() {
    const { submissions } = this.state;
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
              {submissions.map(ele => {
                return (
                  <tr>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.name}</td>
                    <td>{ele.marks_scored}</td>
                    <td>{ele.rank}</td>
                    <td value={ele.id}>Link</td>
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
