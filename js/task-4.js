const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const elEmail = elements.email.value.trim();
  const elPassword = elements.password.value.trim();
  if (elEmail === "" || elPassword === "") {
    return alert("All form fields must be filled in");
  }
  const userInfo = {
    email: elEmail.trim(),
    password: elPassword.trim(),
  };
  event.target.reset();
  console.log(userInfo);
}
const button = document.querySelector("button");
button.classList.add("button-style");
const { email, password } = form.elements;
email.classList.add("email-style");
password.classList.add("password-style");
const labels = document.querySelectorAll("label");
labels.forEach((el) => {
  el.classList.add("label-form");
});
