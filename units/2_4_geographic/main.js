/* CONSTANTS AND GLOBALS */
// const width = window.innerWidth * 0.9,
//   height = window.innerHeight * 0.7,
//   margin = { top: 20, bottom: 50, left: 60, right: 40 };

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../../data/usState.json"),
  d3.csv("../../data/kaggle_income.csv", d3.autoType),
]).then(([geojson, income]) => {
  //-----------------------------
  // Data Preprocessing
  //-----------------------------
  const incomes = income.map((d) => {
    return {
      coordinates: [parseFloat(d.Lon), parseFloat(d.Lat)],
      med: parseFloat(d.Median),
    };
  });

  //-----------------------------
  // Container
  //-----------------------------
  const container = d3
    .select("#container")
    .insert("svg", ":first-child")
    .style("height", "400px");
  const [WIDTH, HEIGHT] = getDimensions(container);
  const MARGIN = { TOP: 0, BOTTOM: 0, LEFT: 0, RIGHT: 0 };

  //-----------------------------
  // Projection
  //-----------------------------
  const projection = d3.geoAlbersUsa();
  projection.fitSize(
    [WIDTH - MARGIN.LEFT - MARGIN.RIGHT, HEIGHT - MARGIN.TOP - MARGIN.BOTTOM],
    geojson
  ); // Make the geojson fit inside the limits given by array

  //-----------------------------
  // Scales
  //-----------------------------
  const incomeColorScale = d3.scaleSequential()
    .domain(d3.extent(incomes, d => d.med))
    .interpolator(d3.interpolateGreens)

  //-----------------------------
  // Paths
  //-----------------------------
  const pathGen = d3.geoPath(projection);

  //-----------------------------
  // Render
  //-----------------------------
  const states = container
    .selectAll("path.State")
    .data(geojson.features, (d) => d.properties.STUSPS)
    .join("path")
    .attr("class", "State")
    .attr("d", (d) => pathGen(d))
    .attr("stroke", "#333")
    .attr("fill", "#aaa0"); // can change this to a color scale

  const dots = container
    .selectAll(".Location")
    .data(incomes)
    .join("circle")
    .attr("class", "Location")
    .attr("r", 1)
    .attr("fill", d => incomeColorScale(d.med))
    .attr("transform", (d) => `translate(${projection(d.coordinates)})`);
});
