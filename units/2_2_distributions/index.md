---
layout: base
includeStyle: true
---
# Section 2.2 | Distributions
[Github link](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/tree/main/units/2_2_distributions)

## Heart Failure
<figure id="HeartViz">
<figcaption>
Scatterplot with resting blood pressure on the X axis against cholesterol on the Y axis. Red color indicates heart disease. Bigger circles correspond to greater maximum heart rates acheived.
</figcaption>
</figure>

I used a [heart failure prediction dataset from Kaggle](https://www.kaggle.com/fedesoriano/heart-failure-prediction) for this assignment. Getting the points on the page was straightforward, as well as adding more scales to adjust the color and the size of each circle. 

I again had a lot of difficulty with positioning the text, especially the rotated Y-axis label. I definitely have a better understanding of transform and rotate now, but I feel like there's a better way to do it than what I currently have.

I used `css` to make the labels appear on hover, but it's not ideal right now because they appear under other data points and can be hard to read. Hopefully as I continue to work with d3 I figure out better ways of showing data points!

In terms of learning something about the dataset, it doesn't seem like there's a clear relationship between resting blood pressure or cholesterol; these measures also don't seem to have a clear relationship with heart disease.

<script src="main.js"></script>