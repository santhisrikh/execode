from .. import db


def get_contest_challenge_id(challenge_id, contest_id):
    contest_challenge_ids = db.engine.execute(
        "select id from contests_challenges where contest_id={} and challenge_id={}".format(contest_id, challenge_id))
    for row in contest_challenge_ids:
        contest_challenge_id = row[0]
        break
    return contest_challenge_id
