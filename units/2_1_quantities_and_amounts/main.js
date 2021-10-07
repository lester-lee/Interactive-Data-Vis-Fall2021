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
  const container = d3
    .select("#svgChart")
    .insert("svg", ":first-child")
    .style("width", "100%");

  // Get computed properties of the svg
  const containerProperties = container.node().getBoundingClientRect();
  const WIDTH = containerProperties.width;
  const HEIGHT = containerProperties.height;
  const MARGIN = WIDTH / 7;

  // SCALES
  const xDomain = [Math.min(...counts) * 0.5, Math.max(...counts) * 1.3];
  const xScale = d3.scaleLinear().domain(xDomain).range([0, WIDTH]);

  const yScale = d3
    .scaleBand()
    .domain(activities)
    .range([0, HEIGHT])
    .paddingInner(0.15);

  // Creating the chart
  const bars = container
    .selectAll(".bar.--svg")
    .data(data)
    .join("g") // Nested svg to group bars with text
    .attr("class", "bar --svg")
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

  // Add number label for each bar
  bars
    .append("text")
    .attr("fill", "#333")
    .text((bar) => bar.count)
    .attr(
      "transform",
      (bar) =>
        `translate(${xScale(bar.count) + 5}, ${yScale.bandwidth() / 2 + 3})`
    );

  // Add y-axis for activity labels
  container
    .append("g")
    .attr("class", "axis --y")
    .call(d3.axisLeft(yScale))
    .attr("transform", `translate(${MARGIN}, 0)`)
    .attr("font-size", 14);
});

// This will create a horizontal bar chart without using svg elements
d3.csv("../../data/squirrelActivities.csv", d3.autoType).then((data) => {
  // Preprocess data so activities are all caps
  data.forEach((row) => {
    row.activity = row.activity.toUpperCase();
  });

  // Squirrel information
  const activities = data.map((row) => row.activity);
  const counts = data.map((row) => row.count);

  // Main d3 container
  const container = d3
    .select("#chartContainer")
    .insert("div", ":first-child")
    .attr("class", "Chart");

  // Get computed properties of the svg
  const containerProperties = container.node().getBoundingClientRect();
  const WIDTH = containerProperties.width;
  const HEIGHT = containerProperties.height;
  const MARGIN = WIDTH / 7;

  // SCALES
  const xDomain = [Math.min(...counts) * 0.5, Math.max(...counts) * 1.3];
  const xScale = d3.scaleLinear().domain(xDomain).range([0, WIDTH]);

  const yScale = d3
    .scaleBand()
    .domain(activities)
    .range([0, HEIGHT])
    .paddingInner(0.15);
});
