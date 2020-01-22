// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../utils/axiosInterceptor";

// eslint-disable-next-line react/prop-types
const ContestDetails = ({ contestId }) => {
  const [challenges, setChallenges] = useState([]);
  const [aboutchallenges, setAboutchallenges] = useState([]);

  useEffect(() => {
    async function getChallenges() {
      try {
        const response = await axios.get(`/contest/${contestId}`);
        setChallenges(response.data.data);
        setAboutchallenges(response.data.contest_data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    getChallenges();
  }, []);
  return (
    <div>
      <div className="container">
        <h3>challenge name: {aboutchallenges.contest_name}</h3>
        <p>{aboutchallenges.details}</p>
        <p>
          <ul>
            <li>start time: {aboutchallenges.start_time}</li>

            <li>end time: {aboutchallenges.end_time}</li>
          </ul>
          <ul>
            <li>
              start date: <b>{aboutchallenges.start_date}</b>
            </li>
            <li>
              end date: <b>{aboutchallenges.end_date}</b>
            </li>
          </ul>
        </p>
        {challenges &&
          challenges.map(challenge => (
            <div key={challenge.challenge_id} className="row border mb-3 mt-5">
              <div className="col-md-8">
                <div>
                  <div className="card-body">
                    <h1>{challenge.description}</h1>
                    <p>{challenge.problem_statement}</p>
                    <span>{challenge.created_at}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="py-3">
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-block btn-lg"
                      disabled
                    >
                      {challenge.difficulty}
                    </button>
                    <Link
                      className="btn btn-outline-primary btn-block btn-lg"
                      to={`/dashboard/user/${aboutchallenges.contest_name}/${challenge.challenge_id}`}
                    >
                      Contests
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContestDetails;
