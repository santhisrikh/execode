from .. import db
import datetime


class SubmissionOutputs(db.Model):
    """
    [summary]

    Args:
        SubmissionOutputsMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "submission_outputs"

    id = db.Column(db.Integer, primary_key=True)
    output_file = db.Column(db.String(250), nullable=False)
    time_taken = db.Column(db.Integer, nullable=False)
    memory_taken = db.Column(db.Integer, nullable=False)
    passed = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime(timezone=False),
                           nullable=False, default=datetime.datetime.now())
    submission_id = db.Column(db.Integer, db.ForeignKey(
        'submissions.id'), nullable=False)
    test_case_id = db.Column(db.Integer, db.ForeignKey(
        'test_cases.id'), nullable=False)
