from app.main.models.AttemptsModel import AttemptsModel
from .. import db


def get_prev_best_attempt(contest_challenge_id):
    prev_attempt = AttemptsModel.query.filter_by(
        contest_challenge_id=contest_challenge_id).first()
    if prev_attempt:
        return prev_attempt.max_score, prev_attempt.id
    else:
        return False, False


def save_to_db(model):
    try:
        db.session.add(model)
        db.session.commit()
    except:
        db.session.rollback()


def add_new_best_attempt(contest_challenge_id, new_score, submission_id, user_id):
    prev_max, prev_attempt_id = get_prev_best_attempt(contest_challenge_id)
    if prev_attempt_id:
        if prev_max <= new_score:
            # update
            new_attempt = AttemptsModel(id=prev_attempt_id, max_score=new_score,
                                        contest_challenge_id=contest_challenge_id, submission_id=submission_id, user_id=user_id)
            save_to_db(new_attempt)
        else:
            return False
    else:
        new_attempt = AttemptsModel(contest_challenge_id=contest_challenge_id,
                                    submission_id=submission_id, user_id=user_id, max_score=new_score)
        save_to_db(new_attempt)

    return new_attempt.id
