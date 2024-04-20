function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
  if (numberInput.value >= 1 && numberInput.value <= 100) {
    createBoxes(numberInput.value);
    numberInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

function createBoxes(amount) {
  divBox.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    let boxSize = 30 + i * 10;
    divBox.insertAdjacentHTML(
      "beforeend",
      `<div style = "width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}; margin-bottom: 5px"></div>`
    );
  }
}

destroyBtn.addEventListener("click", (event) => {
  divBox.innerHTML = "";
});
