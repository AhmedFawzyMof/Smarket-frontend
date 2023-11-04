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
          "https://smarket-api-5o9n.onrender.com/fav",
          {
            method: "post",
            body: JSON.stringify({
              authToken: localStorage.getItem("AuthToken"),
            }),
          }
        );

        const data = await response.json();
        if (data.Error) {
          localStorage.removeItem("AuthToken");
          window.location = "/";
          CreateToast({
            type: "Err",
            msg: "حدث خطأ ما، يرجى تسجيل الدخول",
            time: 2000,
          });
          setTimeout(() => {
            location.replace("/login");
          }, 2000);
        }

        let products = data.products;
        if (!products) {
          products = [];
        }
        if (products.length > 0) {
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
          })"><i class="bx bxs-cart-download"></i></button>
          <button id='addtofav' onclick='delToFav(${
            product.id
          })'><i class='bx bxs-x-circle'></i></button>
          <a href='/product/${product.id}' data-link>
              <img class='image' src='/static/${product.image}' />
            <div class='body'>
              <p>${product.name}</p>
            </div>
          </a>
          ${isOffer()}
        </div>
        `;
            })
            .join("");

          fetch("/static/siteJs/fav.js")
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
        if (products.length == 0) {
          loading(false);

          return `
          <div class='noProducts'>
            <p>لا يوجد منتجات في المفضلة</p>
          </div>
          `;
        }
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
