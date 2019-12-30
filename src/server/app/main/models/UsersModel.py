from .. import db
import datetime


class UserModel(db.Model):
    """
    [summary]

    Args:
        UserMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.String(20), nullable=False, default="user")
    profile_location = db.Column(db.String(250), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, default=datetime.datetime.now())

    @classmethod
    def addTestUser(cls):

        db.session.add(cls(
            **{"name": "sachin2", "email": "beckhamd@gmail.com", "role": "admin", "salt": "xyz"}))
        db.session.commit()
