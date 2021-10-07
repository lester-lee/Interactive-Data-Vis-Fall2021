---
layout: base
---
# Section 2 | Quantities and Amounts

<figure id="svgChart">
<figcaption>
The horizontal bar chart above displays data on the number of squirrels spotted doing particular activities.
</figcaption>
</figure>

<br>
The figure above uses `svg` elements to create the bars, but it was a bit awkward / tedious to actually position all the bars and labels. I ended up using a lot of magic numbers, and it seems like it would take a lot more fiddling to make the chart responsive. This may be due to my inexperience, but I'm going to try recreating the chart without `svg` elements below so that I can compare.

<br>

<figure id="chartContainer" class="ChartContainer">
<figcaption>
The horizontal bar chart above displays data on the number of squirrels spotted doing particular activities.
</figcaption>
</figure>

<script src="{{site.baseurl}}/lib/d3.js"></script>
<script src="main.js"></script>