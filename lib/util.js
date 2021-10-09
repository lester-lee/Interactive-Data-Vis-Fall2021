/**
 * Calculate dimensions of a d3 selection
 * @param d3container a d3 selection
 * @returns computed width and height of d3container
 */
function getDimensions(d3container) {
  const box = d3container.node().getBoundingClientRect();
  return box.width, box.height;
}
