const text = document.querySelector(".block__hex-color");
const colorBlock = document.querySelector(".block__color");
const button = document.querySelector("#btn");
let rgbaColor = "rgb";

text.textContent = "rgb(255,255,255)";

button.addEventListener("click", () => changeColor());

function random() {
  return Math.floor(Math.random() * 255);
}

function changeColor() {
  const currentColor = `${random()}, ${random()}, ${random()}`;
  rgbaColor = "rgb" + `(${currentColor})`;
  colorBlock.style.backgroundColor = rgbaColor;
  colorBlock.style.border = 'none';
  text.textContent = rgbaColor;
}
