from flask import request
from flask_restful import Resource, reqparse
from ..services.contest_detail import get_contests_challenges, get_contests, add_contest
from app.main import db

{
    "start_date": "2020-08-09",
    "end_date": "2020-08-09",
    "start_time": "14:00",
    "end_time": "15:00",
    "details": "these are all the details for this particular challenge",
    "show_leaderboard": True,
    "challenges_ids": [1, 2, 3],
    "action": "creating a contest"
}


class Contest(Resource):
    """"
    Get contest details 
    Create contest
    """
    parser = reqparse.RequestParser()
    parser.add_argument('start_date', type=str,
                        required=True, help="Start Date is needed")
    parser.add_argument('end_date', type=str, required=True,
                        help="End Date is needed")
    parser.add_argument('start_time', type=str,
                        required=True, help="End Time is needed")
    parser.add_argument('end_time', type=str, required=True,
                        help="End Time is needed")
    parser.add_argument('details', type=str, required=True,
                        help="Details is needed")
    parser.add_argument('show_leaderboard', type=bool,
                        required=True, help="Show leaderboard is needed")
    parser.add_argument('challenges_ids', type=list,
                        required=True, location='json', help="Challenges cannot be empty")

    @classmethod
    def get(self, contest_name=None):
        """
            Contest details
        """
        # check authentication header
        # check user role
        # print(contest_name)
        # contests_details = ContestsModel.get_contests_challenges(contest_name)
        # print(contests_details)
        # return {"message": "data"}
        print(contest_name)
        return get_contests_challenges(contest_name)

    @classmethod
    def post(self, contest_name):
        data = Contest.parser.parse_args()
        # Add contest to database
        created = add_contest(data, contest_name)
        if created:
            return {
                "comment": "contest created successfully"
            }
        else:
            return {
                "comment": "contest created successfully"
            }


class Contests(Resource):
    @classmethod
    def get(self):
        return get_contests()
