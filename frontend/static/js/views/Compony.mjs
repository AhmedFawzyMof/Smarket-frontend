import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    const compony = decodeURI(params.name);
    this.company = compony;
    this.setTitle("Alwadi | " + this.company);
    this.setStyle("/static/css/company.css");
  }
  async getHtml() {
    loading(true);

    const response = await fetch(
      "http://localhost:5500/company/" + this.company
    );
    const data = await response.json();
    const products = data.Products;
    const mappedProducts = products
      .map((product, index) => {
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
            return `<p class="price offer">${
              product.Price + product.Offer
            } ج</p>
            <p class="price">${product.Price} ج</p>
            `;
          } else {
            return `<p class="price">${product.Price} ج</p>`;
          }
        }
        let name = product.Name.substr(0, 20);
       const imageId =
        "https://drive.google.com/uc?export=view&id=" +
        product.Image.split("/")[5];
        return `
      <div class='${isAvailable()}' id='${product.Id}' key='${index}'>
        <button id='addtofav' onclick='addToFav(${
          product.Id
        })'><i class="bx bxs-heart"></i></button>
        <a href='/product/${product.Id}' data-link>
            <img class='image' src='${imageId}' />
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
        sc.onload = () => {
          URL.revokeObjectURL(objectURL);
        };
      });
    loading(false);
    return `
    <div class='containerProducts'>
     ${mappedProducts}
    </div>
    `;
  }
}
