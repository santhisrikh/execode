from flask_restful import Resource, reqparse
from flask import request
from app.main.services.decode_auth_token import decode_auth_token
import os
from app.main.services.contests_challenges_services import get_contest_challenge_id
from app.main.services.test_cases_service import get_challenge_test_cases
from app.main.services.submitcode_service import add_submission, update_submission, add_submission_output
from app.main.services.attempts_service import get_prev_best_attempt
from app.main.utils.submitcode_util import get_results
from app.main.services.challenge_details_service import getDetailsById
from app.main.services.attempts_service import add_new_best_attempt


class SubmitCodeResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('challenge_id', type=int, required=True,
                        help="Challenge ID cannot be left blank")
    parser.add_argument('contest_id', type=int,
                        required=True, help="Contest ID is needed")
    parser.add_argument('code', type=str, required=True,
                        help="Code is needed before submission")
    parser.add_argument('language', type=str, required=True,
                        help="Language is needed")

    def post(self):
        auth_token = request.headers.get("Authorization")
        user_id = decode_auth_token(auth_token)
        if user_id:
            data = SubmitCodeResource.parser.parse_args()
            # get contest_challenge_id
            contest_challenge_id = get_contest_challenge_id(
                data["challenge_id"], data["contest_id"])
            if contest_challenge_id:
                # add the sumission to db and get back id
                submission_id = add_submission(
                    data["language"], user_id, contest_challenge_id)
                # get total challenge marks alloted
                challenge_marks = getDetailsById(data["challenge_id"])["marks"]
                # get all test_cases
                test_cases = get_challenge_test_cases(data["challenge_id"])
                # run the file and get all details
                submission_outputs, code_file_path, total_marks = get_results(
                    submission_id, test_cases, data["code"], data["language"], challenge_marks)
                # add to submission outputs
                if submission_outputs:
                    update_submission(submission_id, code_file_path)
                    for submission_output in submission_outputs:
                        new_submission_output = add_submission_output(
                            **submission_output)
                    # add new best attempt
                    add_new_best_attempt(
                        contest_challenge_id, total_marks, submission_id, user_id)
                    return {
                        "total_marks": total_marks,
                        "test_case_result": submission_outputs,
                        "time_taken": "should not be here, its in each test case",
                        "memory_taken": "should also not be here",
                        "comment": "Code Submitted ,here are your results"
                    }, 201
                else:
                    return {"comment": "No output"}, 400
        else:
            return {"comment": "User not Found"}, 401
