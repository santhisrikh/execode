from app.main.models.ChallengeSettingsModel import ChallengeSettings

from app.main import db

def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()

def add_multiple_settings(challenge_id, settings):
    for setting in settings:
        new_settings = ChallengeSettings(language_name=setting["language"], time_limit=setting["time_limit"], memory_limit=setting["memory_limit"], challenge_id=challenge_id)
        save_changes(new_settings)
    return True