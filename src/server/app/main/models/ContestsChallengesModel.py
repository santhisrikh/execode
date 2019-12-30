from .. import db

contests_challenges = db.Table('contests_challenges',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('challenge_id', db.Integer, db.ForeignKey('challenges.id'), nullable=False),
    db.Column('contest_id', db.Integer, db.ForeignKey('contests.id'), nullable=False)
)