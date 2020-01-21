import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../../utils/axiosInterceptor";

class TodayContest extends React.Component {
	constructor() {
		super();
		this.state = {
			contestFinalData: []
		};
	}

	componentDidMount() {
		axios
			.get("/contests")
			.then(res => {
				console.log(res.data);
				this.setState({
					contestFinalData: res.data.contests
				});
			})
			.catch(err => console.log(err));
	}
	render() {
		const res = this.state.contestFinalData.map(contest => {
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
									{" "}
									Start Time <span className='text-danger'>{contest.start_time}</span>
								</p>
								<p className='col-5'>
									End Time <span className='text-danger'>{contest.end_time}</span>{" "}
								</p>
							</div>
						</div>
						<div className='col-xs-4 col-sm-4 p-1'>
							<Link className='text-light' to={`/dashboard/user/${contest.contest_name}`}>
								<button className='btn btn-success'>Enter</button>
							</Link>
						</div>
					</div>
				</div>
			);
		});
		// const todayContest = this.state.contestFinalData.map(contest => {
		//   return (
		//     <div className="col-xl-5 col-sm-12 col-md-6  mb-3 mr-2  card shadow ">
		//       <div className="row align-items-center justify-content-around card-body">
		//         <div className="col-xs-8 col-sm-8">
		//           <h3 className="text-primary">{contest.contest_name}</h3>
		//           <p>{` START DATE: ${contest.start_date} | END DATE: ${contest.end_date} | START TIME: ${contest.start_time}| END TIME: ${contest.end_time}`}</p>
		//         </div>
		//         <div className="col-xs-4 col-sm-4 p-1">
		//             <Link
		//               className="text-light"
		//               to={`/dashboard/user/${contest.contest_name}`}><button className="btn btn-success">
		//               Enter
		//               </button>
		//             </Link>
		//         </div>
		//       </div>
		//     </div>
		//   );
		// });
		return (
			<div>
				{/* <div className="container">
      <div className = "text-success h3">Today Contests</div>
      <div className="row">{todayContest}</div>
    </div> */}
				<div className='container'>
					<div className='text-success h2'>All contests</div>
					<div className='row'>{res}</div>
				</div>
			</div>
		);
	}
}

export default TodayContest;
