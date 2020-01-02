from .. import db
import datetime
# from . import UsersContestsModel
# from . import ContestsChallengesModel
from .ContestsChallengesModel import contests_challenges
from .UsersContestsModel import users_contests


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
    users_contests = db.relationship('UserModel', secondary=users_contests, lazy='subquery',
                                     backref=db.backref('contests', lazy=True))
    contests_challenges = db.relationship('ChallengesModel', secondary=contests_challenges, lazy='subquery',
                                          backref=db.backref('contests', lazy=True))

    @classmethod
    def find_by_name(cls, contest_name):
        """
            Find by contest Name
            :param contest_name
            :return object containing all contest details
        """
        return cls.query.filter_by(contest_name=contest_name)

    @classmethod
    def get_contests_challenges(cls, contest_name):
        return cls.query.filter_by(contest_name=contest_name).all()
