const $nameInput = document.getElementById("Name-input");
const $counterInput = document.getElementById("Counter-input");
const $nameText = document.getElementById("Name-text");
const $counterText = document.getElementById("Counter-text");

/**
 * Update the name whenever user types in the text box
 */
function updateName() {
  const newText = $nameInput.value || "???";
  $nameText.innerText = newText;
}
$nameInput.oninput = updateName;

/**
 * Increment the counter by 1 whenever user clicks the button.
 */
let count = 0;
function updateCount() {
  count++;
  $counterText.innerText = count;
}
$counterInput.onclick = updateCount;
