import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Orders");
    this.setStyle("/static/css/orderHistory.css");
  }
  async getHtml() {
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const response = await fetch(
          "https://smarket-api-5o9n.onrender.com/" +
            localStorage.getItem("AuthToken")
        );

        const data = await response.json();
        const products = data.Products;
        const orders = data.Order;
        for (let j = 0; j < orders.length; j++) {
          const order = orders[j];
          Object.assign(order, { cart: [] });

          for (let index = 0; index < products.length; index++) {
            const product = products[index];
            if (order.id === product.order) {
              order.cart.push(product);
            }
          }
        }

        if (data.Error) {
          localStorage.removeItem("AuthToken");
          CreateToast({
            type: "error",
            msg: "حدث خطأ ما، يرجى تسجيل الدخول",
            time: 2000,
          });
          setTimeout(() => {
            window.location = "/";
          }, 2000);
        }
        if (!data.Error) {
          if (data.Message == "لا توجد طلبات حتى الآن") {
            loading(false);
            return `
          <div class='noOrders'>
            <div class='icons'><i class='bx bxs-package'></i><i class='bx bx-sad' ></i></div>
            <div class='links'>
              <p>لا توجد طلبات حتى الآن</p>
              <a href="/" data-link>الرئيسية</a>
            </div>
          </div>
          `;
          }
        }
        const mappedOrder = orders.map((order, index) => {
          function isDilvered() {
            if (order.delivered == 1) {
              return `
              <div class="Delivered True">
                 تسليم الطلب: نعم
              </div>`;
            } else {
              return `
              <div class="Delivered">
                 تسليم الطلب: لا
              </div>`;
            }
          }
          function isPaid() {
            if (order.paid == 1) {
              return `
              <div class="Paid True">
                 تم الدفع: نعم
              </div>`;
            } else {
              return `
              <div class="Paid">
                 تم الدفع: لا
              </div>`;
            }
          }
          function Total() {
            let Total = 0;
            order.cart.map((product) => {
              Total += product.price * product.quantity;
            });
            return Total;
          }
          let orderId = order.id;
          orderId = orderId.substr(0, 8);
          const mappedItems = order.cart
            .map((product, index) => {
              return `
          <div class="orderitem" key="${index}">
            <img src="/static/${product.image}" alt="${product.name}">
            <div class="itemInfo">
              <p>${product.name}</p>
              <p>الكمية: ${product.quantity}</p>
              <p>السعر: ${product.price} ج</p>
              <p>السعر الإجمالي للمنتج: ${
                product.price * product.quantity
              } ج</p>
            </div>
          </div>
        `;
            })
            .join("");
          return `
          <div class="orderRec" key="${index}">
        <p>معرف الطلب: ${orderId}</p>
        <div class="date">
          <p>
            تاريخ الطلب:
          </p>
          <h4 dir="ltr" style="color: #b3b2b2">
            ${order.date.replace("T", " ").replace("Z", " ")}
          </h4>
        </div>
        <p>المجموع: ${Total()} ج</p>
        ${mappedItems}
          ${isDilvered()}
          ${isPaid()}
      </div>
          `;
        });
        fetch("/static/siteJs/orderHistory.js")
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
        return mappedOrder;
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
