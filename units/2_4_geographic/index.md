---
layout: base
---
# Section 2.4 | Geographic
[Github link](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/tree/main/units/2_3_time_series)

## United States Median Income 2011-2015
<figure id="container">
<figcaption>
The darker and greener dots represent counties where the median income is higher.
</figcaption>
</figure>

I used a dataset from [Golden Oak Research Group, LLC. “U.S. Income Database Kaggle”. Publication: 5, August 2017](https://www.kaggle.com/goldenoakresearch/us-household-income-stats-geo-locations) for this visualization. In terms of creating the visualization, I simply joined circles with each median income in the dataset. The darkest circles (highest median income) are around the bigger cities in the US, which is expected.

I would be interested in looking up how to aggregate data points based on area; I imagine it would involve binning the longitude/latitude coordinates and then calculating some aggregate numbers on these bins. Currently there are too many points, which is causing the visualization to load slowly.

<script src="main.js"></script>