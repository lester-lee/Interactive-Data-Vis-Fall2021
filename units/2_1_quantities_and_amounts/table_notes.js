/* CONSTANTS AND GLOBALS */
// const width = ;
// const height = ;

/* LOAD DATA */
d3.csv("../[PATH_TO_YOUR_DATA]", d3.autoType).then((data) => {
  console.log("data", data);

  /* SCALES */
  /** This is where you should define your scales from data to pixel space */

  /* HTML ELEMENTS */
  /** Select your container and append the visual elements to it */
});

d3.csv("../../data/stateCapitals.csv", d3.autoType)
  .then(data => {
    const table = d3.select("#container")
      .append("table")
      .append("tbody")

    const rows = table
      .selectAll(".row")
      .data(data)
      .join("tr")

    console.log(rows);

    const cells = rows
      .selectAll(".cell")
      .data(d => Object.values(d))
      .join("td")
      .text(d => d)

});
