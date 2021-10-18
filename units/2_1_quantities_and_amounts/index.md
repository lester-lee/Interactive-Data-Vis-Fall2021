---
layout: base
includeStyle: true
---
# Section 2.1 | Quantities and Amounts
[Github link](https://github.com/lester-lee/Interactive-Data-Vis-Fall2021/tree/main/units/2_1_quantities_and_amounts)

## Squirrel Activities

<figure id="svgChart">
<figcaption>
The horizontal bar chart above displays data on the number of squirrels spotted doing particular activities.
</figcaption>
</figure>

<br>
The figure above uses `svg` elements to create the bars, but it was a bit awkward / tedious to actually position the text and axis labels. I had to dynamically calculate the width/heights of the generated elements in order to properly space everything, and it took a lot of fiddling to get the chart labels showing up correctly for smaller screens.

I also ran into some trouble with setting the x scale correctly since I had to take the calculated margins into account. At first, the bars did not seem to be scaling correctly, but then I realized that I was starting the range at the calculated margin instead of at 0.

I'm hoping that this will feel more intuitive as I get more practice!

<script src="main.js"></script>