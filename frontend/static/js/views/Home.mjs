import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("smarket");
    this.setStyle("/static/css/index.css");
  }

  async getHtml() {
    loading(true);
    const response = await fetch("https://smarket-api-5o9n.onrender.com/");

    const data = await response.json();

    delete data.exp;
    var Categories, Offers, Products;
    if (data.Home) {
      Categories = data.Home.Categories;
      Offers = data.Home.Offers;
      Products = data.Home.Products;
    } else {
      Categories = data.Categories;
      Offers = data.Offers;
      Products = data.Products;
    }
    let mappedOfferImage = "";
    let mappedOfferDot = "";
    for (let index = 0; index < Offers.length; index++) {
      const offer = Offers[index];
      function isProduct() {
        if (offer.product !== null) {
          return "/product/" + offer.product;
        } else {
          return "/compony/" + offer.company;
        }
      }
      mappedOfferImage += `
          <a data-link href='${isProduct()}' key='${index}'>
            <img id='carousel' src="/static${offer.image}" />
          </a>
      `;

      mappedOfferDot += `
      <div class='dot' id='d${index + 1}'></div>
      `;
    }

    let mappedCategories = "";

    for (let index = 0; index < Categories.length; index++) {
      const category = Categories[index];
      mappedCategories += `
      <div class='category' key="${index}">
        <a data-link href="/category/${category.name}">
          <img src="/static${category.image}" />
        </a>
        <p>${category.name}</p>
      </div>
      `;
    }

    let mappedProducts = "";

    for (let index = 0; index < Products.length; index++) {
      const product = Products[index];
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
          return `<p class="price offer">${product.price + product.offer} ج</p>
            <p class="price">${product.price} ج</p>
            `;
        } else {
          return `<p class="price">${product.price} ج</p>`;
        }
      }
      let name = product.name.substr(0, 20);
      mappedProducts += `
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
            <img class='image' src='/static${product.image}' />
          <div class='body'>
            <p>${name.substr(0, 24)}</p>
          </div>
        </a>
        ${isOffer()}
      </div>
      `;
    }

    const page = `
       <div class="wrapper">
    <div class="carousel">
    ${mappedOfferImage}
    </div>
    <div class='dots'>
    ${mappedOfferDot}
    </div>
    </div>
    <div class='container'>
    ${mappedCategories}
    </div>
    <div class="containerProducts">
    ${mappedProducts}
    </div>
    `;
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
    fetch("/static/siteJs/index.js")
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
        sc.setAttribute("data-script", "");
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
      });
    loading(false);
    return page;
  }
}
