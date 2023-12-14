import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Alwadi | تاريخ الطلب");
    this.setStyle("/static/css/orderHistory.css");
  }
  async getHtml() {
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const response = await fetch("http://localhost:5500/orderhistory", {
          method: "post",
          body: JSON.stringify({
            token: localStorage.getItem("AuthToken"),
          }),
        });

        const data = await response.json();
        const orders = data.Orders;
        console.log(orders)

        const mapedOrders = orders.map((o) => {
          function IsConfirmed() {
            if (o.Confirmed == 1) {
              return `<p class="cancel off">الغاء الطلب</p>`;
            } else {
              return `<button class="cancel" onclick="CancelOrder('${o.Id}', ${o.Confirmed})">الغاء الطلب</button>`;
            }
          }
          function Confirmed() {
            if (o.Confirmed == 1) {
              return `نعم`;
            } else {
              return `لا`;
            }
          }
          function Delivered() {
            if (o.Delivered == 1) {
              return `نعم`;
            } else {
              return `لا`;
            }
          }
          function Paid() {
            if (o.Paid == 1) {
              return `نعم`;
            } else {
              return `لا`;
            }
          }

          const id = o.Id.substr(0, 8);
          const date = o.Date.replace("T", " ").replace(".", " ").substr(0, 20);
          return `<div class="order">
            <div class="TH">
              <h3>رقم الطلب</h3>
              <h3>التاريخ</h3>
              <h3>طريقة الدفع</h3>
              <h3>مدفوع</h3>
              <h3>تم التوصيل</h3>
              <h3>تم تأكيد</h3>
              <a href="/order/${o.Id}">تفاصيل</a>
            </div>
            <div class="TB">
              <p>${id}</p>
              <p>${date}</p>
              <p>${o.Method}</p>
              <p>${Paid()}</p>
              <p>${Delivered()}</p>
              <p>${Confirmed()}</p>
              ${IsConfirmed()}
            </div>
           </div>`;
        }).join("")

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
            sc.onload = () => {
              URL.revokeObjectURL(objectURL);
            };
          });
        loading(false);
        return `
          <div class="table">
          ${mapedOrders}
          </div>
        `;
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
