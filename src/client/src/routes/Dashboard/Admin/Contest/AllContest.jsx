import React, { Component } from "react";

export default class AllContest extends Component {
  constructor() {
    super();
    this.state = {
      contests: [
        {
          contest_id: "INTEGER",
          contest_name: "Today's Contest",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-1",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-2",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-3",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        },
        {
          contest_id: "INTEGER",
          contest_name: "Contest-4",
          start_date: "DATETIME",
          end_date: "DATETIME",
          end_time: "DATETIME",
          details: "STRING",
          show_leader_board: "DATETIME"
        }
      ]
    };
  }

  render() {
    const { contests: contestFinalData } = this.state;
    const res = contestFinalData.slice(1).map(e => {
      return (
        <div className="col-xl-5 col-sm-12 col-md-6  mb-3 mr-2  card shadow ">
          <div className="row align-items-center justify-content-around card-body">
            <div className="col-xs-8 col-sm-8">
              <h3>Contest Name</h3>
              <p>{`${e.start_date}`} | End Time | Start Date | End Date</p>
            </div>
            <div className="col-xs-4 col-sm-4 p-1">
              <button type="submit" className="btn btn-success border">
                View Submission
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{res}</div>
      </div>
    );
  }
}
