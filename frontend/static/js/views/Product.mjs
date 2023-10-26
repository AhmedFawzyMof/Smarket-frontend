import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    const productId = decodeURI(params.id);
    this.productId = productId;
    this.setTitle("Product: " + this.productId);
    this.setStyle("/static/css/product.css");
  }
  async getHtml() {
    loading(true);
    const response = await fetch(
      "http://localhost:5500/product/" + this.productId
    );
    const data = await response.json();
    const product = data.product;
    console.log(data);
    let opts = "";

    for (let i = 0; i < parseInt(product.inStock); i++) {
      opts += `<option value="${i + 1}">${i + 1}</option>`;
    }
    function productIsAvailable(product) {
      if (product.available == 1) {
        return `
        <div class='addToCart'>
          <input type="hidden" value="${product.id}" id="productId" />
          <input type="hidden" value="${product.name}" id="productName" />
          <input type="hidden" value="${product.image}" id="productImage" />
          <input type="hidden" value="${product.price}" id="productPrice" />
          <input type="hidden" value="${product.inStock}" id="productInStock" />
            <select id='quantity'>
              ${opts}
            </select>
            <button onclick="addTo()">أضف إلى السلة</button>
        </div>
        `;
      } else {
        return `
        <div class='unAvailable'>
         <h2>غير متاح</h2>
        </div>`;
      }
    }
    function IsOffer(product) {
      let withOf = product.price + product.offer;
      let st = Math.abs(withOf - product.price) / withOf;
      let percent = st * 100;

      if (product.offer > 0) {
        return `
        <h2 class='price'>${product.price} ج</h2>
        <p class='offer'>${product.price + product.offer} ج</p>
        <p class='percent'>${Math.trunc(percent)}%</p>
        `;
      } else {
        return `
        <h2 class='price'>${product.price} ج</h2>
        `;
      }
    }

    const theProduct = `
    <div class='image'>
      <img src='/static${product.image}' />
    </div>
    <div class='details'>
      <div class='box1'>
        <p class='compony'>تريد رؤية منتجات أخرى من : <a href='/compony/${
          product.company
        }' data-link class='seemore'>${product.company}</a></p>
        <div class='prices'>
          ${IsOffer(product)}
        </div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>
      <div class='box2'>
          ${productIsAvailable(product)}
      </div>
    </div>
    `;
    fetch("/static/siteJs/product.js")
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
    return theProduct;
  }
}
