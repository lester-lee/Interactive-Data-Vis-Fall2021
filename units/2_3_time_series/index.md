---
layout: base
---
# Section 2.3 | Time Series
[Github link](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/tree/main/units/2_3_time_series)
## Netflix Ratings
<figure id="container">
<figcaption>
The line chart above shows the change in average user rating of Netflix shows over the years. The highlighted area shows the min and max ratings.
</figcaption>
</figure>

I used a [Netflix dataset from Kaggle](https://www.kaggle.com/rishidamarla/netflix-shows-ratings-distribution).

I did some preprocessing with Python; my code for that can be found [here](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/blob/main/units/2_3_time_series/netflix.py). I ended up removing a lot of duplicate shows, as well as shows that didn't have a user rating, which resulted in roughly 250 points of data. I then grouped by the year to get the min, mean, and max user ratings for shows released in a particular year.

After playing around with the line chart, I decided to prune the dataset even more; the final visualization only includes shows from 1990 onward. I didn't think a stacked area chart made too much sense, so instead I created areas to highlight the differences between the mean and the min/max.

Release year doesn't seem to have a big effect, if any, on user ratings -- though perhaps a rating of 50/100 might indicate a terrible show, since that is the lowest rating in this dataset. It seems that shows range from bad to good no matter what the year is. The strange spikes in 2002 and 2012 might be due to limited data in the dataset. That would be interesting to look into.

<script src="main.js"></script>