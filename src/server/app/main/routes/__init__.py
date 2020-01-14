from app.main.routes.auth_controller import UserLogin, LogoutAPI, UserSignUp, FacebookAuthorize, GithubAuthorize
from app.main import api
from app.main.routes.Contest import Contest
from app.main.routes.UserLeaderboard import UserLeaderboard
from app.main.routes.AdminLeaderboard import AdminLeaderboard
from app.main.routes.RuncodeResource import RuncodeResource
from app.main.routes.SubmitCodeResource import SubmitCodeResource



def add_resources(app):
    """
    Method to add resources to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/login')
    api.add_resource(LogoutAPI, '/logout')
    api.add_resource(UserSignUp, '/signup')
    api.add_resource(FacebookAuthorize, '/facebook')
    api.add_resource(GithubAuthorize, '/github')
    api.add_resource(Contest, '/contest/<contest_name>')
    api.add_resource(RuncodeResource, '/runcode')
    api.add_resource(SubmitCodeResource, "/submitcode")
    api.add_resource(UserLeaderboard,'/contest/<contest_id>/leaderboard')
    api.add_resource(AdminLeaderboard,'/contest/<contest_id>/leaderboard/<user_id>')
    api.add_resource(RuncodeResource, '/runcode')
    api.add_resource(SubmitCodeResource, '/submit')
    api.add_resource(Challenge,'/challenge/<challenge_name>')
    api.add_resource(AllChallenge,'/challenges')

def register_blueprints(app):
    """
    Method to add blueprints to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    pass
