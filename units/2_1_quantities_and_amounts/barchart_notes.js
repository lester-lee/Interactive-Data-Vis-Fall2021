const WIDTH = 500;
const HEIGHT = 200;

d3.csv("../../data/squirrelActivities.csv", d3.autoType).then((data) => {
  console.log(data);

  const activities = data.map((d) => d.activity);
  const counts = data.map((d) => d.count);

  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    .style("background-color", "#efefef");

  // SCALES
  const xScale = d3.scaleBand()
    .domain(activities)
    .range([0, WIDTH])
    .paddingInner(.15);

  console.log(
    "d3.extent(data, d => d.count) :>> ",
    d3.extent(data, (d) => d.count)
  );

  const yScale = d3
    .scaleLinear()
    //.domain([0, Math.max(counts) * 1.1])
    .domain(d3.extent(data, (d) => d.count))
    .range([HEIGHT, 0])
    .nice();

  // HTML
  const chart = svg
    .selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar") // Useful for any entries / updates
    .attr("x", (d) => xScale(d.activity))
    .attr("y", (d) => yScale(d.count))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => HEIGHT - yScale(d.count))
    .attr("fill", "#555");
});
