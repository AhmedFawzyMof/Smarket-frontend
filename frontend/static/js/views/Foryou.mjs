import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Favourite");
    this.setStyle("/static/css/company.css");
  }
  async getHtml() {
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const response = await fetch(
          "https://smarket-api-5o9n.onrender.com/foryou",
          {
            method: "post",
            body: JSON.stringify({
              authToken: localStorage.getItem("AuthToken"),
            }),
          }
        );

        const data = await response.json();
        const category = [];

        const products = data.Products;

        for (let index = 0; index < products.length; index++) {
          const product = products[index];
          const dub = category.find((cate) => {
            return cate.name === product.category;
          });
          if (!dub) {
            category.push({ name: product.category, products: [] });
          }

          for (let i = 0; i < category.length; i++) {
            const cate = category[i];
            if (product.category === cate.name) {
              cate.products.push(product);
            }
          }
        }
        const mappedCategory = category
          .map((cate, index) => {
            const mappedProducts = cate.products
              .map((product, index) => {
                function isAvailable() {
                  let ava = "Product";
                  if (product.available !== 1 && product.inStock == 0) {
                    ava += " Notavailable";
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
            return `
      <div class="category">
        <h3>${cate.name}</h3>
        <div id="${cate.name}" class="CategoryProducts" key="${index}">
          ${mappedProducts}
        </div>
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
        return `${mappedCategory}`;
      } else {
        loading(false);
        return `
          <div class='notLoginPop'>
            <a href="/" data-link class="backToHome"><i class='bx bxs-x-circle'></i></a>
            <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>
            <a href='/login' data-link class="log">تسجيل الدخول</a>
            <a href='/register' data-link class="log">تسجيل حساب</a>
          </div>
        `;
      }
    }
  }
}
