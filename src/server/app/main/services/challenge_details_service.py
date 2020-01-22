from app.main.models.ChallengesModel import ChallengesModel
from .. import db


def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()


def getDetailsById(challenge_id):
    details = ChallengesModel.query.get(challenge_id)

    if details:
        return details
    else:
        return False
