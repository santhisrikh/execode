from .. import db
import datetime


class AttemptsModel(db.Model):
    """
    [summary]

    Args:
        AttemptsMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = 'attempts'

    id = db.Column(db.Integer, primary_key=True)
    max_score = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, default=datetime.datetime.now())
    contest_challenge_id = db.Column(db.Integer, db.ForeignKey(
        'contests_challenges.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    submission_id = db.Column(db.Integer, db.ForeignKey(
        'submissions.id'), nullable=False)
