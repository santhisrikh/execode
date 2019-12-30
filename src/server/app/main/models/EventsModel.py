from .. import db
import datetime


class EventsModel(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Text)
    image_file = db.Column(db.String(250))
    created_at = db.Column(db.DateTime(timezone=False),
                           nullable=False, default=datetime.datetime.now())
    contest_challenge_id = db.Column(db.Integer, db.ForeignKey(
        'contests_challenges.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
