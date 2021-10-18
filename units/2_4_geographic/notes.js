Promise.all([
  d3.json("../../data/usState.json"),
  d3.csv("../../data/stateCapitals.csv", d3.autoType),
]).then(([geojson, capitals]) => {
  //-----------------------------
  // Container
  //-----------------------------
  const container = d3
    .select("#container")
    .insert("svg", ":first-child")
    .style("height", "400px");
  const [WIDTH, HEIGHT] = getDimensions(container);
  const MARGIN = { TOP: 20, BOTTOM: 20, LEFT: 20, RIGHT: 20 };

  //-----------------------------
  // Projection
  //-----------------------------
  const projection = d3
    .geoAlbersUsa()
    .fitSize(
      [WIDTH - MARGIN.LEFT - MARGIN.RIGHT, HEIGHT - MARGIN.TOP - MARGIN.BOTTOM],
      geojson
    ); // Make the geojson fit inside the limits given by array

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
    .attr("fill", "#aaa0") // can change this to a color scale
});
