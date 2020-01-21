from app.main.models.SubmissionsModel import SubmissionsModel
from app.main.models.SubmissionOutputsModel import SubmissionOutputs
from .. import db


def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()

def add_submission(language_name, user_id, contest_challenge_id):
    new_submission = SubmissionsModel(
        language_name=language_name, user_id=user_id, contest_challenge_id=contest_challenge_id)
    save_changes(new_submission)
    return new_submission.id


def add_submission_output(output_file, time_taken, memory_taken, passed, submission_id, test_case_id):
    new_submission_output = SubmissionOutputs(
        output_file=output_file, time_taken=time_taken, memory_taken=memory_taken, passed=passed, submission_id=submission_id, test_case_id=test_case_id)
    save_changes(new_submission_output)
    return new_submission_output.id


def update_submission(submission_id, code_file):
    submission_update = SubmissionsModel.query.get(submission_id)
    submission_update.code_file = code_file
    save_changes(submission_update)
    return True
