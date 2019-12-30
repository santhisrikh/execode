from .. import db
import datetime
from . import UsersContestsModel
from . import ContestsChallengesModel


class ContestsModel(db.Model):
    """
    [summary]

    Args:
        ContestsMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "contests"

    id = db.Column(db.Integer, primary_key=True)
    contest_name = db.Column(db.String(80), nullable=False)
    start = db.Column(db.DateTime(120), unique=True, nullable=False)
    end = db.Column(db.DateTime(timezone=False), nullable=False)
    details = db.Column(db.Text, nullable=False)
    show_leaderboard = db.Column(db.Boolean, nullable=False, default=True)
    created_at = db.Column(db.DateTime(timezone=False),
                           nullable=False, default=datetime.datetime.now())
    users_contests = db.relationship('Users', secondary=UsersContestsModel.users_contests, lazy='subquery',
                                     backref=db.backref('contests', lazy=True))
    contests_challenges = db.relationship('Challenges', secondary=ContestsChallengesModel.contests_challenges, lazy='subquery',
                                          backref=db.backref('contests', lazy=True))
