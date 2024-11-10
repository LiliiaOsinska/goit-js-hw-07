function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", btnDestroy);
function createMarkup() {
  if (Number(input.value) < 1 || Number(input.value) > 100) {
    return;
  }
  createBoxes(Number(input.value));
}
function btnDestroy() {
  box.innerHTML = "";
  input.value = "";
}

function createBoxes(num) {
  box.innerHTML = "";
  let sizes = 30;
  const arr = document.createDocumentFragment();

  for (let index = 0; index < num; index++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    arr.appendChild(myBox);
    sizes += 10;
  }
  box.appendChild(arr);
}
create.classList.add("button-create");
destroy.classList.add("button-destroy");
input.classList.add("input-number");
box.classList.add("create-box");
