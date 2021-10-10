import pandas as pd

data = pd.read_csv("../../data/netflix.csv")

# Remove duplicates and shows with no user rating
data = data.drop_duplicates()
data = data[data["user rating score"] > 0]

# Group by the year, and then
# calculate the min, mean, and max user rating
data = data.groupby("release year")
data = pd.DataFrame(data["user rating score"].describe())
data = data[["mean", "min", "max"]]

# Output to a new csv file
data.to_csv("../../data/netflixByYear.csv")