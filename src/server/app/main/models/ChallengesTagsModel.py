from .. import db

challenges_tags = db.Table('challenges_tags',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), nullable=False),
    db.Column('challenge_id', db.Integer, db.ForeignKey('challenges.id'),nullable=False)
)