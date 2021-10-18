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
  // Scales
  //-----------------------------
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.year))
    .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain([50, 100])
    .range([HEIGHT - MARGIN.BOTTOM, MARGIN.TOP])
    .nice();

  //-----------------------------
  // Lines
  //-----------------------------

  /**
   * Takes a given key and returns a d3 line generator
   */
  function generateLine(key) {
    return d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d[key]));
  }

  const keys = ["meanRating", "minRating", "maxRating"];
  const [meanLine, minLine, maxLine] = keys.map(generateLine);

  //-----------------------------
  // Areas
  //-----------------------------
  const aboveMeanArea = d3
    .area()
    .x(meanLine.x())
    .y0(meanLine.y())
    .y1(maxLine.y());

  const belowMeanArea = d3
    .area()
    .x(meanLine.x())
    .y0(minLine.y())
    .y1(meanLine.y());

  //-----------------------------
  // Rendering
  //-----------------------------
  function renderLine(
    cls,
    strokeColor,
    lineGen,
    options = { strokeWidth: 1, dashed: false }
  ) {
    const line = container
      .selectAll(`.Trend.--${cls}`)
      .data([data])
      .join("path")
      .attr("class", `Trend --${cls}`)
      .attr("stroke", strokeColor)
      .attr("stroke-width", options.strokeWidth)
      .attr("fill", "none")
      .attr("d", (d) => lineGen(d));
    if (options.dashed) line.attr("stroke-dasharray", "10,8");
    return line;
  }

  function renderArea(areaGen, fill) {
    container
      .selectAll(".Area")
      .data([data])
      .join("path")
      .attr("d", areaGen)
      .attr("fill", fill);
  }

  const aboveMean = renderArea(aboveMeanArea, "#ff08");
  const belowMean = renderArea(belowMeanArea, "#ff08");

  const meanTrend = renderLine("mean", "#333", meanLine, { strokeWidth: 3 });
  const minTrend = renderLine("min", "#3333", minLine, { dashed: true });
  const maxTrend = renderLine("max", "#3333", maxLine, { dashed: true });

  //-----------------------------
  // Axes
  //-----------------------------
  // X Axis
  container
    .append("g")
    .attr("class", "Axis --x")
    .attr("transform", `translate(0, ${HEIGHT - MARGIN.BOTTOM})`)
    .call(d3.axisBottom(xScale).ticks(6));

  // Y Axis
  container
    .append("g")
    .attr("class", "Axis --y")
    .attr("transform", `translate(${MARGIN.LEFT}, 0)`)
    .call(d3.axisLeft(yScale));
});
