from flask_restful import Resource
from flask import request
# from app.main.services.alll_challenge import contest_challenge
from app.main.services.alll_challenge import get_all_challenge
from app.main.services.alll_challenge import get_contest_challenge


class AllChallenge(Resource):

    def get(self):
        # contest_id = request.headers.get('contest_id')
        # if contest_id != None:
            # return get_contest_challenge
        # print("requested")
        return get_all_challenge()
