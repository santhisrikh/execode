from .. import db

users_contests = db.Table('users_contests',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), nullable=False),
    db.Column('contest_id', db.Integer, db.ForeignKey('contests.id'), nullable=False)
)