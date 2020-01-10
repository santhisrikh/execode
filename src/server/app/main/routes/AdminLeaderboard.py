from flask import request
from flask_restful import Resource
# from ..models.ChallengesModel import ChallengesModel
from ..services.admin_leaderboard_service import get_raw_data

class AdminLeaderboard(Resource):
    """"
    Get Admin Leaderboard details 
        """
    @classmethod
    def get(cls,contest_id,user_id):
        """
            User per contest leaderboard details
        """
        # print(Challenges_details)
        return get_raw_data(contest_id,user_id)
