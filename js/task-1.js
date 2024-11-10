const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length} `);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

const categories = document.querySelectorAll("h2");
categories.forEach((el) => {
  el.classList.add("categories-style");
});
const liEl = document.querySelectorAll("li");
liEl.forEach((el) => {
  el.classList.add("li-style");
});
items.forEach((element) => {
  element.lastElementChild.children;
  element.classList.add("element-style");
});
const boxCategories = document.querySelector("#categories");
boxCategories.classList.add("box-categories");
