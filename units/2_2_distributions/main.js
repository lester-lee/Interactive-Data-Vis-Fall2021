d3.csv("../../data/heart.csv", d3.autoType).then((data) => {
  //-----------------------------
  //#region Data Preprocessing
  //-----------------------------
  // Ensure relevant measures are above 0
  data = data.filter((d) => d.RestingBP > 0 && d.Cholesterol > 0);
  //#endregion ------------------

  //-----------------------------
  //#region Container and Constants
  //-----------------------------
  const container = d3
    .select("#HeartViz")
    .insert("svg", ":first-child")
    .attr("height", "400");

  const [WIDTH, HEIGHT] = getDimensions(container);
  const MARGIN = 50; // TODO: change later
  //#endregion ------------------

  //-----------------------------
  //#region Scales
  //-----------------------------
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.RestingBP))
    .range([MARGIN, WIDTH - MARGIN])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.Cholesterol))
    .range([HEIGHT - MARGIN, MARGIN])
    .nice();

  const sizeScale = d3
    .scaleSqrt()
    .domain(d3.extent(data, (d) => d.MaxHR))
    .range([1, 5]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(["0", "1"])
    .range(["#bbb8", "#be2e2e"]);
  //#endregion ------------------

  //-----------------------------
  //#region Rendering
  //-----------------------------
  const points = container
    .append("g")
    .attr("class", ".Points")
    .selectAll(".Point")
    .data(data)
    .join("g")
    .attr(
      "transform",
      (d) => `translate(${xScale(d.RestingBP)}, ${yScale(d.Cholesterol)})`
    );

  points
    .attr("class", "Point")
    .append("circle")
    .attr("r", (d) => sizeScale(d.MaxHR))
    .style("fill", (d) => colorScale(d.HeartDisease));

  points
    .append("text")
    .text((d) => `(${d.RestingBP}, ${d.Cholesterol})`)
    .attr("class", "label");

  //#endregion ------------------

  //-----------------------------
  //#region Axes
  //-----------------------------

  // X Axis
  container
    .append("g")
    .attr("class", "Axis --x")
    .style("transform", `translate(0, ${HEIGHT - MARGIN}px)`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .text("Resting Blood Pressure")
    .attr("fill", "#333")
    .attr("x", `${WIDTH / 2}`)
    .attr("font-size", "14")
    .attr("y", "30");

  // Y Axis
  container
    .append("g")
    .attr("class", "Axis --y")
    .style("transform", `translate(${MARGIN}px, 0px)`)
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("transform", `rotate(270, 0, ${HEIGHT / 2}) translate(0, 165) `)
    .text("Cholesterol")
    .attr("text-anchor", "middle")
    .attr("fill", "#333")
    .attr("font-size", "14");

  //#endregion ------------------

  /*
  const xHist = d3.histogram()
    .value(d => d.RestingBP)
    .domain(xScale.domain())
    .thresholds(xScale.ticks(25))

  const xBins = xHist(data)
  console.log('xBins :>> ', xBins);
  */
});
