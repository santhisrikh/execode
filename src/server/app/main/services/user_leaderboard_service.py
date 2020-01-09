# from app.main.models.ChallengesModel import ChallengesModel
from ..models.AttemptsModel import AttemptsModel
from ..models.ContestsChallengesModel import contests_challenges
from ..models.UsersModel import UserModel

from app.main import db
import uuid
import json


def get_raw_data(contest_id):
    data_raw = db.engine.execute("select a.max_score,c.name,c.id from attempts as a join contests_challenges as b  on a.contest_challenge_id=b.challenge_id join users as c on c.id = a.user_id where b.contest_id='{}'".format(contest_id))
    print(data_raw)

    names = [dict(row) for  row in data_raw]
    # print(names)
    resp = {"data": names}
    # for item in resp["data"]:
    #     print(item)

    return resp