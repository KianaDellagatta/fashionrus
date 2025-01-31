const productContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `           <a href="product.html" class="product-link">
            <div class="product">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product 2" />
              <div class="details">
                <h3>${product.productdisplayname}</h3>
                <p class="price">${product.brandname}</p>
                <p>${product.category} | ${product.articletype}</p>
                <p>DKK ${product.price},-</p>
                
              </div>
              <div class="discount"><p>-${product.discount}%</p></div>
            </div>
          </a>`;
    })
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
