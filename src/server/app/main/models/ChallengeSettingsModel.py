from .. import db
import datetime

class ChallengeSettings(db.Model):
    __tablename__ = "challenge_settings"

    id = db.Column(db.Integer, primary_key=True)
    language_name = db.Column(db.String(20), nullable=False) 
    time_limit = db.Column(db.Integer, nullable=False)
    memory_limit = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=False), nullable=False, default=datetime.datetime.now())  
    challenge_id = db.Column(db.Integer, db.ForeignKey('challenges.id'), nullable=False)