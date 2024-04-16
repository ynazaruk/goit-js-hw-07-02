const categoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesEl.length}`);
//console.log(categoriesEl);

categoriesEl.forEach((element) => {
  const categoriesNames = element.querySelector("h2").textContent;
  const categoriesQuantity = element.querySelectorAll("li").length;
  console.log(`Category: ${categoriesNames}`);
  console.log(`Elements: ${categoriesQuantity}`);
});
