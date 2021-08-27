import os
for d in os.listdir("./units"):
  s ="-\tlink: REPLACE/{}\n\tname: {}".format(d, d)
  print(s)