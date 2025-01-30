const productContainer = document.querySelector(".product-container");
const productId = 1535;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    let { discount, articletype, category, price, brandname } = data;
    productContainer.innerHTML = `
          <div class="product-image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sahara Team India Fanwear Jersey" />
      </div>

      <!-- Middle Section: Product Details -->
      <div class="product-info">
        <h2>Product Information</h2>
        <div class="info-grid">
          <p><strong>Model name</strong></p>
          <p>Black Puma Lightweight Hat</p>

          <p><strong>Color</strong></p>
          <p>Black</p>

          <p><strong>Price</strong></p>
          <p>${price} kr</p>
        </div>

        <h3>Brand</h3>
        <p>${data.brandname}</p>
      </div>

      <!-- Right Section: Purchase Box -->
      <aside class="purchase-box">
        <h2>Black Puma Lightweight Hat</h2>
        <p class="brand-info">${data.category} | ${data.articletype}</p>
        <p for="size">Choose a size</p>
        <select id="size">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button class="add-to-basket">Add to basket</button>
      </aside>`;
  });
