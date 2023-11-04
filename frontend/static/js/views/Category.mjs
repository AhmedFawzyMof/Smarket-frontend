import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    const category = decodeURI(params.name);
    this.category = category;
    this.setTitle(category);
    this.setStyle("/static/css/company.css");
  }
  async getHtml() {
    loading(true);

    const response = await fetch(
      "https://smarket-api-5o9n.onrender.com/category/" + this.category
    );
    const data = await response.json();
    const products = data.Products;
    const mappedProducts = products
      .map((product, index) => {
        function isAvailable() {
          let ava = "product";
          if (product.available !== 1 && product.inStock == 0) {
            ava += " notavailable";
          } else {
            ava;
          }
          if (product.offer > 0) {
            ava += " offer";
          }
          return ava;
        }

        function isOffer() {
          if (product.offer > 0) {
            return `<p class="price offer">${
              product.price + product.offer
            } ج</p>
            <p class="price">${product.price} ج</p>
            `;
          } else {
            return `<p class="price">${product.price} ج</p>`;
          }
        }
        let name = product.name.substr(0, 20);
        return `
      <div class='${isAvailable()}' id='${product.id}' key='${index}'>
        <input type="hidden" value="${product.id}" id="productId" />
        <input type="hidden" value="${product.name}" id="productName" />
        <input type="hidden" value="${product.image}" id="productImage" />
        <input type="hidden" value="${product.price}" id="productPrice" />
        <input type="hidden" value="${product.inStock}" id="productInStock" />
        <input type="hidden" value="1" id="productQuantity" />
        <button id='addtocart' onclick="addItemToCart(${
          product.id
        })"><i class='bx bxs-cart-download'></i></button>
        <button id='addtofav' onclick='addToFav(${
          product.id
        })'><i class="bx bxs-heart"></i></button>
        <a href='/product/${product.id}' data-link>
            <img class='image' src='/static/${product.image}' />
          <div class='body'>
            <p>${name}</p>
          </div>
        </a>
        ${isOffer()}
      </div>
      `;
      })
      .join("");
    fetch("/static/siteJs/compony.js")
      .then(function (response) {
        if (!response.ok) {
          return false;
        }
        return response.blob();
      })
      .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        const oldScripts = document.querySelectorAll("[data-script]");
        oldScripts.forEach((script) => {
          if (script.src !== objectURL) {
            document.head.removeChild(script);
          }
        });
        var sc = document.createElement("script");
        sc.setAttribute("src", objectURL);
        sc.setAttribute("defer", "");
        sc.setAttribute("data-script", "");
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
      });
    loading(false);
    return `
    <div class='containerProducts'>
     ${mappedProducts}
    </div>
    `;
  }
}
