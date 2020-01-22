from app.main import db
from app.main.models.ChallengesModel import ChallengesModel
from app.main.models.ChallengeSettingsModel import ChallengeSettings
from app.main.models.TestCasesModel import TestCasesModel
from app.main.models.ChallengeSettingsModel import ChallengeSettings
import datetime

# from app import User
from app.main.models.UsersModel import UserModel
import jwt
from app.main.settings import key
from app.main.models.ChallengeSettingsModel import ChallengeSettings

def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()

# def get_challenge(data,challenge_name):

def get_challenge(challenge_name):
    challenge = ChallengesModel.query.filter_by(challenge_name = challenge_name).first()
    challenege1 = db.engine.execute("select * from challenges join test_cases on challenges.id = test_cases.challenge_id join challenge_settings on challenge_settings.challenge_id = challenges.id")
    print(challenege1)
    # print(challenge)
    details = {
        "challenge_name":challenge.challenge_name,
         "challenge_id":challenge.description,
         "problem_statement":challenge.problem_statement,
         "input_format":challenge.input_format,
         "output_format":challenge.output_format,
         "difficulty":challenge.difficulty,
         "sample_input":challenge.sample_input,
         "sample_output":challenge.sample_output
         }
    return {"challenge":details}   

def add_challenge(description,problem_statement,input_format,output_format,constraints,difficulty,sample_input,sample_output,challenge_name):   #This service is us   ed to add both the challenge and required test cases for it.
    description = description
    problem_statement = problem_statement,
    input_format = input_format,
    output_format = output_format,
    difficulty = difficulty,
    sample_input = sample_input,
    sample_output = sample_output,
    # print(description,problem_statement,input_format,output_format,difficulty,sample_input,sample_output)
    new_asset = ChallengesModel(challenge_name=challenge_name,description=description,problem_statement=problem_statement,input_format=input_format,output_format=output_format,difficulty=difficulty,sample_input=sample_input,sample_output=sample_output)
    save_changes(new_asset)
    challengeid = new_asset.id
    return challengeid
   