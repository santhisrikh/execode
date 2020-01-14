import os


def make_challenge_folder(challenge_id):
    """
        Check if user run code folder exists: Creates if it doesnot
    """
    cwd = os.getcwd()
    path = cwd+"/static/challenges/challenge"+str(challenge_id)
    if os.path.exists(path):
        return path
    else:
        try:
            os.makedirs(path)
        except:
            return False
    return path

