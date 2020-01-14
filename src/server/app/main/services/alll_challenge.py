from app.main import db
import jwt
from app.main.models.ChallengesModel import ChallengesModel
from app.main.models.TestCasesModel import TestCasesModel
import json

def save_changes(data):
    db.session.add(data)
    db.session.commit()

def change(row):
    
    row = dict(row)
    row["created_at"] = str(row["created_at"])
    return row

def get_all_challenge():
    challenges = db.engine.execute("select challenges.challenge_name,challenges.id, count(test_cases.id) from challenges join test_cases on challenges.id=test_cases.challenge_id group by challenges.id")
    # print(challenges.created_at)
    challenges = [dict(row) for row in challenges]
    return {
        "challenges":challenges
    }

def get_contest_challenge():
    print("helllo")
    
