const $name_input = document.getElementById("Name-input");
const $counter_input = document.getElementById("Counter-input");
const $name_text = document.getElementById("Name-text");
const $counter_text = document.getElementById("Counter-text");

/**
 * Update the name whenever
 * user types in the text box
 */
function updateName() {
  $name_text.innerText = $name_input.value;
}
$name_input.oninput = updateName;

/**
 * Increment the counter by 1 whenever
 * user clicks the button.
 */
let count = 0;
function updateCount() {
  count++;
  $counter_text.innerText = count;
}
$counter_input.onclick = updateCount;