const categoryList = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (element) => `
        <a href="productlist.html?category=${element.category}" class="box"><p>${element.category}</p></a>
    `
    )
    .join("");
  categoryList.innerHTML = markup;
}
