function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", () => {
  bodyColor.style.backgroundColor = spanColor.textContent = getRandomHexColor();
});
const textColor = document.querySelector(".widget").firstElementChild;
textColor.classList.add("text-color");
