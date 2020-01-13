import os
import subprocess
import fileinput
from app.main.utils.run_code_util import is_error, make_python_codefile, generate_output_error, compare_output


def make_submit_folder(submission_id):
    """
        Make submission folder
    """
    cwd = os.getcwd()
    path = cwd+"/static/submit_code/s_id"+str(submission_id)
    if os.path.exists(path):
        return path
    else:
        try:
            os.makedirs(path)
        except:
            return False
    return path


def get_results(submission_id, test_cases, code, language, max_score):
    # after inserting into submissionsfolder
    path = make_submit_folder(submission_id)
    # insert code file path into submissions folder
    language = language.lower()
    if language == "python":
        if path:
            code_file_path = make_python_codefile(code, path)
            submission_outputs = []
            total_strength = 0
            total_marks = 0
            for tcs in test_cases:
                total_strength = total_strength + tcs["strength"]

            for test_case in test_cases:
                output_path, error_path = generate_output_error(
                    test_case["input_file"], code_file_path, path, language, output_file_name="tco"+str(test_case["id"]), error_file_name="tce"+str(test_case["id"]))
                # evaluate
                # compare with challenge_settings - currently not done
                is_correct, output = compare_output(
                    output_path, test_case["output_file"])
                passed = is_correct and (not is_error(error_path))
                if passed:
                    total_marks = total_marks + \
                        (test_case["strength"]/total_strength)*max_score
                submission_format = {"output_file": output_path, "time_taken": 1, "memory_taken": 1,
                                     "passed": passed, "submission_id": submission_id, "test_case_id": test_case["id"]}
                # bring into db save format
                submission_outputs.append(submission_format)
            return submission_outputs, code_file_path, total_marks
        return False, False
    elif language == "javascript":
        return {"comment": "Currently not supported"}
    else:
        return {"comment": "Unknown Language"}
