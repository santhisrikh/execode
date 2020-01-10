from flask import request
from flask_restful import Resource
# from ..models.ChallengesModel import ChallengesModel
from ..services.submitted_code_service import get_raw_data

class SubmittedCode(Resource):
    """"
    Get Submitted Code details 
        """
    @classmethod
    def get(cls,contest_id,user_id,submission_id):
        return get_raw_data(contest_id,user_id,submission_id)
