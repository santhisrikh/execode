import os
import subprocess
import fileinput


def makeRunCodeFolder(user_id):
    """
        Check if user run code folder exists: Creates if it doesnot
    """
    cwd = os.getcwd()
    path = cwd+"/static/run_code/user"+str(user_id)
    if os.path.exists(path):
        return path
    else:
        try:
            os.makedirs(path)
        except:
            return False
    return path


def make_python_codefile(code, path):
    wf = open(path+"/code.py", "w")
    wf.write(code)
    wf.close()
    return path+"/code.py"


def make_input_file(sample_input, path):
    wg = open(path+"/x.txt", "w")
    wg.write(sample_input)
    wg.close()
    return path+"/x.txt"


def make_sample_output(sample_output, path):
    wg = open(path+"/expected.txt", "w")
    wg.write(sample_output)
    wg.write("\n")
    wg.close()
    return path+"/expected.txt"


def make_js_file(code, path):
    wf = open(path+"/code.js", "w")
    wf.write(code)
    wf.close()
    return path+"/code.py"


def generate_output_error(input_path, code_path, path, my_lang):
    output_path = path+"/y.txt"
    error_path = path+"/z.txt"
    if my_lang == "javascript":
        pass
    elif my_lang == "python":
        os.system("python {} 0<{} 1>{} 2>{}".format(
            code_path, input_path, output_path, error_path))
    return output_path, error_path


def is_error(error_path):
    wf = open(error_path)
    lines = wf.readlines()
    if len(lines) == 0:
        wf.close()
        return False
    else:
        wf.close()
        return True


def read_error(error_path):
    wf = open(error_path)
    lines = wf.readlines()
    wf.close()
    return lines


def compare_output(output_path, expected_path):
    user_output = open(output_path)
    expected_output = open(expected_path)
    output_lines = user_output.readlines()
    expected_lines = expected_output.readlines()
    user_output.close()
    expected_output.close()
    print(expected_lines)
    if len(output_lines) == len(expected_lines):
        for i in range(len(output_lines)):
            if output_lines[i] != expected_lines[i]:
                return False, output_lines
        return True, output_lines
    else:
        return False, output_lines


def getResults(sample_input, sample_output, language, user_id, code):
    path = makeRunCodeFolder(user_id)
    my_lang = language.lower()
    if path:
        input_path = make_input_file(sample_input, path)
        expected_path = make_sample_output(sample_output, path)
        if my_lang == "javascript":
            code_file_path = make_js_file(code, path)
            pass
        elif my_lang == "python":
            code_file_path = make_python_codefile(code, path)
        output_path, error_path = generate_output_error(
            input_path, code_file_path, path, my_lang)
        is_correct, output = compare_output(output_path, expected_path)
        return (output, read_error(error_path), is_correct and (not is_error(error_path)))

    return None, None, False
