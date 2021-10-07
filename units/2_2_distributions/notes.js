const WIDTH = 600,
  HEIGHT = 600,
  MARGIN = 50, // To leave space for axes ticks
  RADIUS = 5;

  d3.json("../../data/environmentRatings.json", d3.autoType)
    .then(data => {
      console.log('data :>> ', data);

      const svg = d3.select("#container")
        .append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .style("background-color", "#efefef")

      // Scales
      const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.ideologyScore2020))
        .range([MARGIN, WIDTH-MARGIN])
        .nice()

      const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.envScore2020))
        .range([HEIGHT-MARGIN, MARGIN])
        .nice()

      const colorScale = d3.scaleOrdinal()
        .domain(["R", "D", "I"])
        .range(["red", "blue", "purple"])

      // HTML
      svg
        .selectAll(".dot")
        .data(data)
        .join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.ideologyScore2020))
        .attr("cy", d => yScale(d.envScore2020))
        .attr("r", RADIUS)
        .style("fill", d => colorScale(d.Party))

      svg.append("g")
        .attr("class", "x-axis")
        .style("transform", `translate(0px, ${HEIGHT - MARGIN}px)`)
        .call(d3.axisBottom(xScale))

      svg.append("g")
        .attr("class", "y-axis")
        .style("transform", `translate(${MARGIN}px, 0px)`)
        .call(d3.axisLeft(yScale))
    });