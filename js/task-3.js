const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const text = document.querySelector("h1");
input.addEventListener("input", changeInput);
function changeInput(event) {
  const userName = event.target.value.trim();
  if (userName === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = userName;
  }
}
input.classList.add("input-style");
text.classList.add("text-style");
