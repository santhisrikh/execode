from app.main.models.TestCasesModel import TestCasesModel


def get_challenge_test_cases(challenge_id):
    test_cases = TestCasesModel.query.filter_by(
        challenge_id=challenge_id).all()
    cases = []
    for row in test_cases:
        cases.append({
            "id": row.id,
            "name": row.name,
            "strength": row.strength,
            "visibility": row.visibility,
            "input_file": row.input_file,
            "output_file": row.output_file,
            "challenge_id": row.challenge_id
        })
    return cases
