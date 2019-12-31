from app.main.models.UsersModel import UserModel
from app.main import login_manager, db
import uuid


@login_manager.user_loader
def load_user(user_id):
    """
    [summary]

    Args:
        user_id ([type]): [description]

    Returns:
        [type]: [description]
    """
    return UserModel.query.get(int(user_id))


def save_new_user(data):
    user = UserModel.query.filter_by(email=data['email']).first()
    if not user:
        new_user = UserModel(
            public_id=str(uuid.uuid4()),
            email=data['email'],
            name=data['name'],
            password=data.get('password', None)
        )
        save_changes(new_user)
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.',
        }
        return response_object, 409


def get_all_users():
    return UserModel.query.all()


def login(email, password):
    user = UserModel.query.filter_by(email=email).first()


def get_one_user(public_id):
    return UserModel.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()
