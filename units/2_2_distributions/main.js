/* CONSTANTS AND GLOBALS */
// const width = ,
//   height = ,
//   margin = ,
//   radius = ;

/* LOAD DATA */
d3.csv("../../data/heart.csv", d3.autoType)
  .then(data => {
    console.log('data :>> ', data);

    const container = d3.select("#HeartViz")
      .insert("svg", ":first-child")

    const WIDTH, HEIGHT = getDimensions(container);
    

  });
