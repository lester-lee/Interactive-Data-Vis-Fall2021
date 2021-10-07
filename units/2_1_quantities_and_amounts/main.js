// Read squirrel csv
d3.csv("../../data/squirrelActivities.csv", d3.autoType).then((data) => {
  // Squirrel information
  const activities = data.map((row) => row.activity);
  const counts = data.map((row) => row.count);

  // Main d3 container
  const container = d3.select(".Chart.--horizontal.--bar").append("svg");

  // Get computed properties of the svg
  const containerProperties = container.node().getBoundingClientRect();
  const WIDTH = containerProperties.width;
  const HEIGHT = containerProperties.height;

  // SCALES
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (row) => row.count))
    .range([0, WIDTH])
    .nice();

  const yScale = d3
    .scaleBand()
    .domain(activities)
    .range([0, HEIGHT])
    .paddingInner(0.15);

  // Creating the chart
  const chart = container
    .selectAll(".Bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (row) => yScale(row.activity))
    .attr("height", yScale.bandwidth())
    .attr("width", (row) => xScale(row.count))
    .attr("fill", "#555");
});
