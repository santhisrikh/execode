from flask import Blueprint, current_app
from ..models.UsersModel import UserModel
bp = Blueprint("public", __name__)

@bp.route("/")
def hello_world():
    current_app.logger.info("Here I am")
    current_app.logger.warning(" Warning you")
    current_app.logger.error("But you can't hear me")
    # UserModel.addTestUser()

    return "hello hello_world"