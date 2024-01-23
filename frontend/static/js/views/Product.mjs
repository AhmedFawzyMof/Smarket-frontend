import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    const productId = decodeURI(params.id);
    this.productId = productId;
    this.setStyle("/static/css/product.css");
  }
  async getHtml() {
    loading(true);
    const response = await fetch(
      "http://192.168.1.7:5500/product/" + this.productId
    );
    const data = await response.json();
    const product = data.Product;
    this.setTitle("Alwadi | " + product.Name);
    function productIsAvailable(product) {
      if (product.Available == 1) {
        let types = "";
        const imageId = product.Image;
        product.Types.forEach((pt, i) => {
          function isOffer() {
            if (pt.Offer > 0) {
              return `<p class="price offer">السعر: ${pt.Price + pt.Offer} ج</p>
                <p class="price">${pt.Price} ج</p>
                `;
            } else {
              return `<p class="price">السعر: ${pt.Price} ج</p>`;
            }
          }
          types += `
        <div class="type" id="${pt.Id}">
          <label for="pt${i}">
          <img src="http://localhost:5500/${imageId}" />
           ${isOffer()}
          <p class="weight" id="${pt.Portion}">الوزن: ${pt.Portion} ${
            pt.Uint
          }</p>
          </label>
          <input type="radio" id="pt${i}" name="pt1">
          <input type="hidden" id="price" value="${pt.Price}">
          <input type="hidden" id="size" value="${pt.Portion} ${pt.Uint}">
        </div>
        `;
        });
        return `
        <div class="types">
        ${types}
        </div>
        <button class="addToCart" onclick="addTo(${product.Id}, '${product.Image}', '${product.Name}')">
        أضف إلى سلة التسوق <i class='bx bxs-cart-add'></i>
        </button>
        `;
      } else {
        return `
        <div class='unAvailable'>
         <h2>غير متاح</h2>
        </div>`;
      }
    }
    function IsOffer(product) {
      let withOf = product.Price + product.Offer;
      let st = Math.abs(withOf - product.Price) / withOf;
      let percent = st * 100;

      if (product.Offer > 0) {
        return `
        <h2 class='price'>${product.Price} ج</h2>
        <p class='offer'>${product.Price + product.Offer} ج</p>
        <p class='percent'>${Math.trunc(percent)}%</p>
        `;
      } else {
        return `
        <h2 class='price'>${product.Price} ج</h2>
        `;
      }
    }

    const imageId = product.Image;

    const theProduct = `
    <div class='image'>
      <img src='http://localhost:5500/${imageId}' />
    </div>
    <div class='details'>
      <div class='box1'>
        <p class='compony'>تريد رؤية منتجات أخرى من : <a href='/compony/${
          product.Company
        }' data-link class='seemore'>${product.Company}</a></p>
        <div class='prices'>
          ${IsOffer(product)}
        </div>
        <h2>${product.Name}</h2>
        <p>${product.Description}</p>
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
        sc.onload = () => {
          URL.revokeObjectURL(objectURL);
        };
      });
    loading(false);
    return theProduct;
  }
}
