from flask import request
from flask_restful import Resource
from ..models.ContestsModel import ContestsModel
from ..services.contest_detail import get_contests_challenges,get_contests,add_contest
from app.main import db
class Contest(Resource):
    """"
    Get contest details 
    Create contest
    """
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
    def post(self,contest_name):
        data = request.get_json()
        challenges=[]
        parent_data = dict(contest_name=data['contest_name'],start_date = data['start_date'],end_date=data['end_date'],details=data['details'],show_leader_board=data['show_leader_board'],challenges_ids=data['challenges_ids'])
        print(parent_data)
        return add_contest(parent_data,contest_name)    
        
class Contests(Resource):
    @classmethod
    def get(self):
        return get_contests()           
