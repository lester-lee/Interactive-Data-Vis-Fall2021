---
layout: base
---
# Section 2.3 | Time Series
<figure id="container">
<figcaption>
The line chart above shows the change in average user rating of Netflix shows over the years. The highlighted area shows the min and max ratings.
</figcaption>
</figure>

I used a [Netflix dataset from Kaggle](https://www.kaggle.com/rishidamarla/netflix-shows-ratings-distribution).

I did some preprocessing with Python; my code for that can be found [here](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/blob/main/units/2_3_time_series/netflix.py). I ended up removing a lot of duplicate shows, as well as shows that didn't have a user rating, which resulted in roughly 250 points of data. I then grouped by the year to get the min, mean, and max user ratings for shows released in a particular year.

After playing around with the line chart, I decided to prune the dataset even more; the final visualization only includes shows from 1990 onward. I didn't think a stacked area chart made too much sense, so instead I created areas to highlight the differences between the mean and the min/max.


<script src="main.js"></script>