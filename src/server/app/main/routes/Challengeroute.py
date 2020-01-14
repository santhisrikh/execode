from flask_restful import Resource
from flask import request
from app.main.services.challenge import add_challenge,get_challenge
from app.main import db
import json
import os
from app.main.services.decode_auth_token import decode_auth_token
from app.main.utils.challeges_util import make_challenge_folder
from app.main.services.tcs_services import add_multiple_test_cases, update_input_output
from app.main.services.settings_services import add_multiple_settings

class Challenge(Resource):

    def get(self,challenge_name):
        # auth token 
        auth_token = request.headers.get("Authorization")
        user_id = decode_auth_token(auth_token)
        if user_id:
            # check if he is admin
            return get_challenge(challenge_name)
        return {"comment":"Not Authorized"}, 401

    def post(self,challenge_name):
        # auth token 
        auth_token = request.headers.get("Authorization")
        user_id = decode_auth_token(auth_token)
        if user_id:
            # check if he is admin            
            Info = json.loads(request.form.get('challenge_details'))
            test_cases = json.loads(request.form.get('test_cases'))
            settings = json.loads(request.form.get('settings'))
            inp_count = 0
            out_count = 0
            test_input = []
            test_output = []
            for key, val in request.files.items():
                if key == 'test_case_input'+ str(inp_count):
                    test_input.append(val)
                    inp_count = inp_count + 1
                elif key== 'test_case_output'+str(out_count):
                    test_output.append(val)        
                    out_count = out_count + 1
            challenge_id = add_challenge(**Info, challenge_name=challenge_name) 

            # make folder with this challenge id
            path = make_challenge_folder(challenge_id)
            # insert test cases details into db
            test_case_ids = add_multiple_test_cases(challenge_id, test_cases)
            #  make files of test_cases
            if len(test_case_ids) != len(test_input):
                return {"comment": "Incorrect test cases"}, 404
            # update test_cases db with new input output paths
            for i in range(len(test_case_ids)):
                test_input[i].save(path+"/tcs_input_"+str(test_case_ids[i])+".txt")
                test_output[i].save(path+"/tcs_output_"+str(test_case_ids[i])+".txt")
                if update_input_output(path+"/tcs_input_"+str(test_case_ids[i]), path+"/tcs_output_"+str(test_case_ids[i]) , test_case_ids[i]):
                    continue
                else:
                    return {"comment":"couldnt insert into the databse"}, 500
            
            # add multiple settings cases
            add_multiple_settings(challenge_id, settings)

            return {"comment": "successfully stored the data"}, 201
        return {"comment":"Not Authorized"}, 401


