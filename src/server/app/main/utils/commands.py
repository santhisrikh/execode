# def getCommand(language):
#     my_lang = lower(language)
#     command = ""
#     if my_lang == "javascript":
#         pass
#     elif my_lang == "python":
#         pass


# import os
# import fileinput
# import subprocess
# # from Naked.toolshed.shell import execute_js, muterun_js
# import time

# wf = open("make.py", "w")
# wf.write("for i in range(1,10000000):print(i)")
# wf.close()

# start = time.time()
# os.system("python make.py 0<x.txt 1>y.txt 2>z.txt")
# end = time.time()

# print(end-start)


# # for line in fileinput.input("make.py"):
# #     print(line)

# # wj = open("make.js", "w")
# # wj.write("console.log('hi,asdfasdfasdfasd');")
# # wj.close()

# # response = muterun_js('make.js')
# # print(response.stdout)

# # ret_val = os.system("node make.js 0<x.txt 1>y.txt 2>z.txt")
# # os.system("python make.py")
# # print(ret_val)
# # subprocess.call("rhino -f make.js", shell=True)
# # subprocess.call("node make.js 0<x.txt 1>y.txt 2>z.txt", shell=True)
