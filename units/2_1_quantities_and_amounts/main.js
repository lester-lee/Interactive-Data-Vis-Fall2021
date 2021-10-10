// This will create a horizontal bar chart by inserting svg elements
d3.csv("../../data/squirrelActivities.csv", d3.autoType).then((data) => {
  // Preprocess data so activities are all caps
  data.forEach((row) => {
    row.activity = row.activity.toUpperCase();
  });

  // Squirrel information
  const activities = data.map((row) => row.activity);
  const counts = data.map((row) => row.count);

  // Main d3 container
  const container = d3.select("#svgChart").insert("svg", ":first-child");

  const [WIDTH, HEIGHT] = getDimensions(container);

  // Calculate horizontal margins via y-axis
  const yScale = d3
    .scaleBand()
    .domain(activities)
    .range([0, HEIGHT])
    .paddingInner(0.15);
  // Add y-axis for activity labels
  const yAxis = container
    .append("g")
    .attr("class", "axis --y")
    .call(d3.axisLeft(yScale))
    .attr("font-size", 14);

  // Use the width of the axis labels as the left margin
  const MARGIN = yAxis.node().getBoundingClientRect().width;
  yAxis.attr("transform", `translate(${MARGIN}, 0)`);

  // Use calculated margin to set x scale
  const xDomain = [0, Math.max(...counts) * 1.3];
  const xScale = d3
    .scaleLinear()
    .domain(xDomain)
    .range([0, WIDTH - MARGIN]);

  // Creating the chart
  const bars = container
    .selectAll(".bar")
    .data(data)
    .join("g") // Nested svg to group bars with text
    .attr("class", "bar")
    .attr(
      "transform",
      (bar) => `translate(${MARGIN}, ${yScale(bar.activity)})`
    );

  // Create rects for the bars
  bars
    .append("rect")
    .attr("fill", "#555")
    .attr("width", (bar) => xScale(bar.count))
    .attr("height", yScale.bandwidth());

  console.log("xScale(0) :>> ", xScale(0));
  counts.forEach((c) => {
    console.log("xScale(c) :>> ", c, xScale(c));
  });

  // Add number label for each bar
  bars
    .append("text")
    .attr("fill", "#333")
    .text((bar) => bar.count)
    .attr(
      "transform",
      (bar) =>
        `translate(${xScale(bar.count) + 5}, ${yScale.bandwidth() / 2 + 5})`
    );
});
