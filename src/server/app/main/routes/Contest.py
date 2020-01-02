from flask import request
from flask_restful import Resource
from ..models.ContestsModel import ContestsModel


class Contest(Resource):
    """"
    Get contest details 
    Create contest
    """

    def get(self, contest_name):
        """
            Contest details
        """
        # check authentication header
        # check user role
        contests_details = ContestsModel.get_contests_challenges(contest_name)
        print(contests_details)
        return {"message": "data"}
