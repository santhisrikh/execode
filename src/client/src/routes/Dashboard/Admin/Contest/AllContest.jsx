import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllContests } from "../../../../redux/admin/action";

const AllContest = ({ contests: contestFinalData, getContests, getContestId, token }) => {
	useEffect(() => {
		const payload = {
			token
		};
		getContests(payload);
	}, []);
	const res = contestFinalData.map(contest => {
		return (
			<div className='col-xl-5 col-sm-12 col-md-6  mb-3 mr-2  card shadow '>
				<div className='row align-items-center justify-content-around card-body'>
					<div className='col-xs-8 col-sm-8'>
						<h3 className='text-primary'>{contest.contest_name}</h3>
						<div className='row'>
							<p className='col-5'> Start Date {contest.start_date}</p>
							<p className='col-5'>End Date {contest.end_date} </p>
						</div>
						<div className='row'>
							<p className='col-5'>
								Start Time
								<span className='text-danger'>{contest.start_time}</span>
							</p>
							<p className='col-5'>
								End Time
								<span className='text-danger'>{contest.end_time}</span>
							</p>
						</div>
					</div>
					<div className='col-xs-4 col-sm-4 p-1'>
						<Link className='text-light' to={`/dashboard/admin/${contest.id}/leaderboard`}>
							<button className='btn btn-success'>View Submission</button>
						</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div className='container'>
			<div className='row'>{res}</div>
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
