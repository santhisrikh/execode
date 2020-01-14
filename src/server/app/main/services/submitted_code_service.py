# from app.main.models.ChallengesModel import ChallengesModel
from ..models.AttemptsModel import AttemptsModel
from ..models.ContestsChallengesModel import contests_challenges
from ..models.UsersModel import UserModel

from app.main import db
import uuid
import json


def get_raw_data(contest_id, user_id, submission_id):
    data_raw = db.engine.execute((" select e.code_file as code  from attempts as a join contests_challenges as b  on a.contest_challenge_id=b.challenge_id join challenges as c on c.id = a.contest_challenge_id join users as d on d.id = a.user_id join submissions as e on a.submission_id = e.id  where b.contest_id = '{}' and a.user_id = '{}'and e.id = '{}'".format(contest_id, user_id, submission_id)))

    print(data_raw)
    names = [dict(row) for row in data_raw]

    resp = {"code": names, "comment": "success"}
    return resp
