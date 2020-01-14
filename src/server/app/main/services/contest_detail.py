from app.main import db
from time import gmtime, strftime
import datetime
# from app import User

from app.main.models.ContestsModel import ContestsModel
from app.main.models.ChallengesModel import ChallengesModel
from app.main.models.ContestsChallengesModel import contests_challenges


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def find_by_name(cls, contest_name):
    """
        Find by contest Name
        :param contest_name
        :return object containing all contest details
    """
    return cls.query.filter_by(contest_name=contest_name)


def get_contests_challenges(contest_name):
    data = {}
    challenge_data = {}
    # import pdb; pdb.set_trace()
    data_raw = db.engine.execute(
        "select * from contests join contests_challenges on contests.id=contests_challenges.contest_id join challenges on contests_challenges.challenge_id=challenges.id where contests.contest_name='{}'".format(contest_name))
    names = [dict(row) for row in data_raw]
    challenges_arr = []
    for i in names:
        data['contest_name'] = i['contest_name']
        data['start_date'] = str(i['start'].strftime("%m/%d/%Y"))
        data['end_date'] = str(i['end'].strftime("%m/%d/%Y"))
        data['details'] = i['details']
        data['show_leaderboard'] = i['show_leaderboard']
        data['created_at'] = str(i['created_at'])
        challenge_data['description'] = i['description']
        challenge_data['challenge_id'] = i['challenge_id']
        challenge_data['problem_statement'] = i['problem_statement']
        challenge_data['input_format'] = i['input_format']
        challenge_data['output_format'] = i['output_format']
        challenge_data['difficulty'] = i['difficulty']
        challenge_data['sample_input'] = i['sample_input']
        challenge_data['sample_output'] = i['sample_output']
        challenge_data['created_at'] = str(
            i['created_at'].strftime("%m/%d/%Y"))
        challenges_arr.append(challenge_data)
        data['challenges'] = challenges_arr
       # data_date =(names[0]['start'].strftime("%m/%d/%Y"))
    resp = {"data": data}
    # for item in resp["data"]:
    #     print(item)
    return resp


def get_contests():
    print('in the contest')
    data = {}
    result_data = db.engine.execute("select *from contests")
    final_val = [dict(row) for row in result_data]
    print(final_val)
    for j in final_val:
        data["id"] = j['id']
        data["contest_name"] = j['contest_name']
        data['start'] = str(j['start'].strftime("%m/%d/%Y"))
        data['end'] = str(j['end'].strftime("%m/%d/%Y"))
        data['details'] = j['details']
        data['show_leaderboard'] = j['show_leaderboard']
        data['created_at'] = str(j['created_at'].strftime("%m/%d/%Y"))
    resp = {"contests": data}
    return resp


def add_contest(data, contest_name):
    challenges_ids = []
    contest_name = data['contest_name']
    start = data['start_date']
    end = data['end_date']
    details = data['details']
    show_leaderboard = data['show_leader_board']
    challenges_ids = data['challenges_ids']
    new_asset = ContestsModel(contest_name=contest_name, start=start,
                              end=end, details=details, show_leaderboard=show_leaderboard,)
    save_changes(new_asset)
    contest_id = new_asset.id
    for i in challenges_ids:
        new_asset = db.engine.execute(
            "insert into contests_challenges (challenge_id,contest_id) values ({},{})".format(i, contest_id))
    return True
