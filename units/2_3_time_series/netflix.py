#%%
import pandas as pd
data = pd.read_csv("../../data/netflix.csv")

data = data.drop_duplicates()
data = data[data["user rating score"] > 0]

data = data.groupby("release year")
data = pd.DataFrame(data["user rating score"].describe())
data = data[["mean", "min", "max"]]
data

data.to_csv("../../data/netflixByYear.csv")