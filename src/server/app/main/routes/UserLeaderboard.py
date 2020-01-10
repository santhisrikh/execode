from flask import request
from flask_restful import Resource
# from ..models.ChallengesModel import ChallengesModel
from ..services.user_leaderboard_service import get_raw_data

class UserLeaderboard(Resource):
    """"
    Get UserLeaderboard details 
        """
    @classmethod
    def get(cls,contest_id):
        """
            User per contest details
        """
        # check user role
        # Challenges_details = ChallengesModel.get_raw_data()
        # print(Challenges_details)
        return get_raw_data(contest_id)
