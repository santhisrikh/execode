from .. import db
import datetime


class TestCasesModel(db.Model):
    """
    [summary]

    Args:
        TestCasesMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = 'test_cases'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    strength = db.Column(db.Float(precision=2), nullable=False)
    visibility = db.Column(db.Boolean, nullable=False)
    input_file = db.Column(db.String(250), nullable=False)
    output_file = db.Column(db.String(250), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, default=datetime.datetime.now())
    challenge_id = db.Column(db.Integer, db.ForeignKey(
        'challenges.id'), nullable=False)
