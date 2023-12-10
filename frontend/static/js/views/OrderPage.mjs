import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    const id = decodeURI(params.id);
    this.id = id;
    this.setTitle("Alwadi | Order " + this.id);
    this.setStyle("/static/css/orderHistory.css");
  }
  async getHtml() {
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
         const response = await fetch("http://192.168.1.5:5500/order/"+this.id, {
          method: "post",
          body: JSON.stringify({
            token: localStorage.getItem("AuthToken"),
          }),
        });

        const data = await response.json();

        const order = data.Order[0]

        order["cart"] = data.Products

        console.log(order)
        fetch("/static/siteJs/orderMethod.js")
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
                  
          function isDilvered() {
            if (order.Delivered == 1) {
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
            if (order.Paid == 1) {
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
              Total += product.Price * product.Quantity;
            });
            return Total;
          }
          let orderId = order.Id;
          orderId = orderId.substr(0, 8);
          let date = order.Date.replace("T", " ").replace("Z", " ").split('.')[0]
          const mappedItems = order.cart
            .map((product, index) => {
                        const imageId = "https://drive.google.com/uc?export=view&id=" + product.Image.split("/")[5];
              return `
          <div class="orderitem">
            <img src="${imageId}" alt="${product.Name}">
            <div class="itemInfo">
              <p>${product.Name}</p>
              <p>الكمية: ${product.Quantity}</p>
              <p>السعر: ${product.Price} ج</p>
              <p>الوزن: ${product.Portion} ${product.Uint}</p>
              <p>السعر الإجمالي للمنتج: ${
                product.Price * product.Quantity
              } ج</p>
            </div>
          </div>
        `;
            })
            .join("");
         const mappedOrder = `
          <div class="orderRec">
        <p>معرف الطلب: ${orderId}</p>
        <div class="date">
          <p>
            تاريخ الطلب:
          </p>
          <h4 dir="ltr" style="color: #b3b2b2">
            ${date}
          </h4>
        </div>
        <p>المجموع: ${Total()} ج</p>
        ${mappedItems}
          ${isDilvered()}
          ${isPaid()}
      </div>
          `;
        

        loading(false);
        return `${mappedOrder}`;
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
