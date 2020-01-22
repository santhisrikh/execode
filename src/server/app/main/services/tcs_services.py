from app.main.models.TestCasesModel import TestCasesModel
from app.main import db

def save_changes(data):
    try:
        db.session.add(data)
        db.session.commit()
    except:
        db.session.rollback()


def add_multiple_test_cases(challenge_id, test_cases):
    test_case_ids = []
    for test_case in test_cases:
        # insert details
        # visibility , challenge_id, strength, name
        new_test_case = TestCasesModel(challenge_id=challenge_id, visibility=test_case["visibility"], strength=test_case["strength"], name=test_case["test_case_name"])
        save_changes(new_test_case)
        test_case_ids.append(new_test_case.id)

    return test_case_ids

def update_input_output(input_path, output_path, test_case_id):    
    # print(output_path)
    # update_test_case = TestCasesModel.query.get(test_case_id)
    # update_test_case.input_file = input_path
    # save_changes(update_test_case)
    # update_input_output.output_file = output_path    
    # save_changes(update_test_case)
    db.engine.execute("update test_cases set input_file='{input_path}', output_file='{output_path}' where id={test_case_id}")
    try:
        db.session.commit()
    except:
        db.session.rollback()
    return True