/* LOAD DATA */
d3.csv("../../data/netflixByYear.csv", (d) => {
  return {
    year: new Date(d["release year"], 0, 1),
    meanRating: parseFloat(d["mean"]),
    minRating: parseFloat(d["min"]),
    maxRating: parseFloat(d["max"]),
  };
}).then((data) => {
  //-----------------------------
  // Container Properties
  //-----------------------------
  const container = d3
    .select("#container")
    .insert("svg", ":first-child")
    .attr("height", "300");

  const [WIDTH, HEIGHT] = getDimensions(container);
  const MARGIN = {
    TOP: 10,
    BOTTOM: 30,
    RIGHT: 30,
    LEFT: 50,
  };

  //-----------------------------
  // Scales and Lines
  //-----------------------------
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.year))
    .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain([40, 100])
    .range([HEIGHT - MARGIN.BOTTOM, MARGIN.TOP])
    .nice();

  /**
   * Takes a given key and returns a d3 line generator
   */
  function generateLine(key) {
    return d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d[key]));
  }

  const meanLine = generateLine("meanRating");
  const minLine = generateLine("minRating");
  const maxLine = generateLine("maxRating");

  //-----------------------------
  // Stacks
  //-----------------------------
  const stack = d3.stack().keys(["minRating", "meanRating", "maxRating"])(data);
  console.log('stack :>> ', stack);

  //-----------------------------
  // Rendering
  //-----------------------------
  /**
   * Renders a line given stroke color
   */
  function renderLine(cls, strokeColor, lineGen, strokeWidth = 1) {
    return container
      .selectAll(`.Trend.--${cls}`)
      .data([data])
      .join("path")
      .attr("class", `Trend --${cls}`)
      .attr("stroke", strokeColor)
      .attr("stroke-width", strokeWidth)
      .attr("fill", "none")
      .attr("d", (d) => lineGen(d));
  }

  const meanTrend = renderLine("mean", "#333", meanLine, 3);
  const minTrend = renderLine("min", "aqua", minLine);
  const maxTrend = renderLine("max", "green", maxLine);

  //-----------------------------
  // Axes
  //-----------------------------
  // X Axis
  container
    .append("g")
    .attr("class", "Axis --x")
    .attr("transform", `translate(0, ${HEIGHT - MARGIN.BOTTOM})`)
    .call(d3.axisBottom(xScale));

  // Y Axis
  container
    .append("g")
    .attr("class", "Axis --y")
    .attr("transform", `translate(${MARGIN.LEFT}, 0)`)
    .call(d3.axisLeft(yScale));
});
