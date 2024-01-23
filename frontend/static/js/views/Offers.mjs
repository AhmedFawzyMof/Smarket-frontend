import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Alwadi | العروض");
    this.setStyle("/static/css/company.css");
  }
  async getHtml() {
    loading(true);
    const getOffer = await fetch("http://192.168.1.7:5500/offers");
    const data = await getOffer.json();
    const category = [];
    let products = data.Products;

    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      const dub = category.find((cate) => {
        return cate.name === product.Category;
      });
      if (!dub) {
        category.push({ name: product.Category, products: [] });
      }

      for (let i = 0; i < category.length; i++) {
        const cate = category[i];
        if (product.Category === cate.name) {
          cate.products.push(product);
        }
      }
    }
    fetch("/static/siteJs/offers.js")
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
        sc.onload = () => {
          URL.revokeObjectURL(objectURL);
        };
      });
    let mappedCategory;
    if (category.length > 0) {
      mappedCategory = category
        .map((cate, index) => {
          const mappedProducts = cate.products
            .map((product, index) => {
              function isAvailable() {
                let ava = "Product";
                if (product.Available !== 1) {
                  ava += " Notavailable";
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
                  return `<p class="price offer">${
                    product.Price + product.Offer
                  } ج</p>
            <p class="price">${product.Price} ج</p>
            `;
                } else {
                  return `<p class="price">${product.Price} ج</p>`;
                }
              }
              let name = product.Name.substr(0, 17) + "...";
              const imageId = product.Image;

              return `
      <div class='${isAvailable()}' id='${product.Id}' key='${index}'>
        <button id='addtofav' onclick='addToFav(${
          product.Id
        })'><i class="bx bxs-heart"></i></button>
        <a href='/product/${product.Id}' data-link>
            <img class='image' src='http://localhost:5500/${imageId}' />
          <div class='body'>
            <p>${name}</p>
          </div>
        </a>
        ${isOffer()}
      </div>
      `;
            })
            .join("");
          return `
      <div class="categoryO">
        <h3>${cate.name}</h3>
        <div id="${cate.name}" class="CategoryProducts" key="${index}">
          ${mappedProducts}
        </div>
      </div>
      `;
        })
        .join("");
    } else {
      mappedCategory = "no products found";
    }
    loading(false);
    return `${mappedCategory}`;
  }
}
