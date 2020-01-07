from flask_restful import Resource, reqparse
from flask import request
from app.main.services.decode_auth_token import decode_auth_token
from app.main.utils.run_code_util import getResults
from app.main.services.challenge_details_service import getDetailsById


class RuncodeResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('challenge_id', type=int,
                        required=True, help="Challenge ID is needed")
    parser.add_argument('code', type=str, required=True, help="Code is needed")

    def post(self):
        auth_token = request.headers.get("Authorization")
        user_id = decode_auth_token(auth_token)

        if user_id:
            data = RuncodeResource.parser.parse_args()
            details = getDetailsById(data["challenge_id"])
            if details:
                output, error, is_correct = getResults(
                    details["sample_input"], details["sample_output"], data["language"], user_id, data["code"])
                return {
                    "comment": "",
                    "user_output": output,
                    "user_error": error,
                    "sample_result": is_correct
                }, 200
            else:
                return {"comment": "Incorrect Challenge Id", "error": True}, 404
        else:
            return {"comment": "User not Found"}, 401
