import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllContests } from "../../../../redux/admin/action";

const AllContest = ({
  contests: contestFinalData,
  getContests,
  token
}) => {
  useEffect(() => {
    const payload = {
      token
    };
    getContests(payload);
  }, []);
  const res = contestFinalData.slice(1).map(contest => {
    return (
      <div className="col-xl-5 col-sm-12 col-md-6  mb-3 mr-2  card shadow ">
        <div className="row align-items-center justify-content-around card-body">
          <div className="col-xs-8 col-sm-8">
            <h3>{contest.contest_name}</h3>
            <p>{` START DATE: ${contest.start_date} | END DATE: ${contest.end_date} | END TIME: ${contest.end_time}`}</p>
          </div>
          <div className="col-xs-4 col-sm-4 p-1">
            {/* <button type="submit" value ={contest.contest_id} onClick = {getContestId} className="btn btn-success border"> */}
            <button type="submit" className="btn btn-success">
              <Link
                className="text-light"
                to={`/dashboard/admin/${contest.id}/leaderboard`}
              >
                View Submission
              </Link>
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
};

const mapStateToProps = state => ({
  isLoading: state.admin.isLoading,
  contests: state.admin.contests,
  token: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
  getContests: payload => dispatch(fetchAllContests(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllContest);
