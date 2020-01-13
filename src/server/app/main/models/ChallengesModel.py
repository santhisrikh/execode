from .. import db
import datetime
from . import ChallengesTagsModel


class ChallengesModel(db.Model):
    """
    [summary]

    Args:
        ChallengesMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "challenges"
    id = db.Column(db.Integer, primary_key=True)
    challenge_name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)
    problem_statement = db.Column(db.Text, nullable=False)
    input_format = db.Column(db.Text, nullable=False)
    output_format = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(20), nullable=False)
    sample_input = db.Column(db.Text, nullable=False)
    sample_output = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime(timezone=False),
                           nullable=False, default=datetime.datetime.now())
    challenge_settings = db.relationship(
        'ChallengeSettings', backref='challenge', lazy=True)
    tags = db.relationship('TagsModel', secondary=ChallengesTagsModel.challenges_tags, lazy='subquery',
                           backref=db.backref('challenges', lazy=True))
    test_cases = db.relationship(
        'TestCasesModel', backref='challenge', lazy=True)
    max_score = db.Column(db.Integer, nullable=True, default=0)
