import React from "react";

class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      submissions: [
        {
          id: 1,
          name: "santhi",
          testcases_passed: 2,
          total_testcases: 5,
          marks_scored: 30,
          rank: 5
        },
        {
          id: 2,
          name: "Ashish",
          testcases_passed: 5,
          total_testcases: 5,
          marks_scored: 60,
          rank: 1
        },
        {
          id: 3,
          name: "Harshith",
          testcases_passed: 3,
          total_testcases: 5,
          marks_scored: 50,

          rank: 2
        },
        {
          id: 4,
          name: "Sachin",
          testcases_passed: 4,
          total_testcases: 5,
          marks_scored: 55,
          rank: 1
        }
      ]
    };
  }
  //   componentDidMount(){
  //     axios({
  //         methods: "GET",
  //         url: "http://127.0.0.1:5000/"
  //     }).then(response => {
  //         console.log(response.data);

  //     });
  // }
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
                <th scope="col">Passed Testcases</th>
                <th scope="col">Score</th>
                <th scope="col">Rank</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(ele => {
                return (
                  <tr>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.name}</td>
                    <td>
                      {ele.testcases_passed}/{ele.total_testcases}
                    </td>
                    <td>{ele.marks_scored}</td>
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
