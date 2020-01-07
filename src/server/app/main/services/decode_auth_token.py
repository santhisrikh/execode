import jwt
from app.main.settings import key
from app.main.models.UsersModel import UserModel


def decode_auth_token(auth_token):
    user = jwt.decode(auth_token, key)

    if "sub" in user:
        user_id = user["sub"]
        exits = UserModel.query.get(int(user_id))
        if exits:
            return user_id
        else:
            return False
    else:
        return False
