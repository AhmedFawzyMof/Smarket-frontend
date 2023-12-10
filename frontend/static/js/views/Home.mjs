import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("Alwadi | Home");
    this.setStyle("/static/css/index.css");
  }

  async getHtml() {
    loading(true);
    if (localStorage.getItem("home")) {
      localStorage.removeItem("home");
      location.reload();
    } else {
      localStorage.setItem("home", "loded");
    }
    const response = await fetch("http://192.168.1.5:5500/");

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

      const imageId = "https://drive.google.com/uc?export=view&id=" + offer.Image.split("/")[5];

      mappedOfferImage += `
          <a data-link href='/product/${offer.Id}' key='${index}'>
            <img id='carousel' src="${imageId}" />
          </a>
      `;

      mappedOfferDot += `
      <div class='dot' id='d${index + 1}'></div>
      `;
    }

    let mappedCategories = "";

    for (let index = 0; index < Categories.length; index++) {
      const category = Categories[index];

      const imageId = "https://drive.google.com/uc?export=view&id=" + category.Image.split("/")[5];

      mappedCategories += `
      <div class='category' key="${index}">
        <a data-link href="/category/${category.Name}">
          <img src="${imageId}" />
        </a>
        <p>${category.Name}</p>
      </div>
      `;
    }

    let mappedProducts = "";

    for (let index = 0; index < Products.length; index++) {
      const product = Products[index];
      function isAvailable() {
        let ava = "product";
        if (product.Available !== 1) {
          ava += " notavailable";
        } else {
          ava;
        }
        if (product.Offer > 0) {
          ava += " offer";
        }
        return ava;
      }

      function isOffer() {
        if (product.Offer > 0) {
          return `<p class="price offer">${product.Price + product.Offer} ج</p>
            <p class="price">${product.Price} ج</p>
            `;
        } else {
        return `<p class="price">${product.Price} ج</p>`;
        }
      }

      const name = product.Name.substr(0, 17) + "...";

      const imageId = "https://drive.google.com/uc?export=view&id=" + product.Image.split("/")[5];

      mappedProducts += `
      <div class='${isAvailable()}' id='${product.Id}' key='${index}'>
        <button id='addtofav' onclick='addToFav(${product.Id})'>
        <i class="bx bxs-heart"></i>
        </button>
        <a href='/product/${product.Id}' data-link>
            <img class='image' src='${imageId}' />
          <div class='body'>
            <p>${name}</p>
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
        sc.onload = () => {
          URL.revokeObjectURL(objectURL);
        };
      });
    loading(false);
    return page;
  }
}
