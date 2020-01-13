from flask import request
from flask_restful import Resource
from ..models.ContestsModel import ContestsModel
from ..services.contest_detail import get_contests
from app.main import db

class Contests(Resource):
    @classmethod
    def get(self):
        return get_contests()           
