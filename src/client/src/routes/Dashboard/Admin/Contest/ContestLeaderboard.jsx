import React from "react";
// import Axios from "../../../../utils/axiosInterceptor"
class ContestLeaderBoard extends React.Component {
	constructor() {
		super();
		this.state = {
			leaderboard: [
				{
					name: "",
					score: "",
					rank: "",
					submission: ""
				}
			]
		};
	}

	render() {
		const { leaderboard } = this.state;
		return (
			<>
				<div className='row d-flex justify-content-center'>
					<table
						className='table table-striped text-center border border-success col-md-8 '
						style={{ marginTop: "100px" }}
					>
						<thead>
							<tr className='p-3 mb-2 bg-info text-white'>
								{/* <th scope="col">S.no</th> */}
								<th scope='col'>Username</th>
								<th scope='col'>Score</th>
								<th scope='col'>Rank</th>
								<th scope='col'>Submission</th>
							</tr>
						</thead>
						<tbody>
							{leaderboard.map(ele => {
								return (
									<tr>
										{/* <th scope="row">{ele.id}</th> */}
										<td>{ele.name}</td>
										<td>{ele.score}</td>
										<td>{ele.rank}</td>
										<td>{ele.submission}</td>
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
