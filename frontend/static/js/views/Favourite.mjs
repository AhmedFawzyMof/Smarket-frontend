import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Alwadi | Favourite");
    this.setStyle("/static/css/company.css");
  }
  async getHtml() {
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const response = await fetch("http://192.168.1.7:5500/fav", {
          method: "post",
          body: JSON.stringify({
            token: localStorage.getItem("AuthToken"),
          }),
        });

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

        let products = data.Products;
        if (!products) {
          products = [];
        }
        if (products.length > 0) {
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
              const name = product.Name.substr(0, 17) + "...";

              const imageId = product.Image;

              return `
        <div class='${isAvailable()}' id='${product.Id}' key='${index}'>
          <button id='addtofav' onclick='delToFav(${
            product.Id
          })'><i class='bx bxs-x-circle'></i></button>
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
