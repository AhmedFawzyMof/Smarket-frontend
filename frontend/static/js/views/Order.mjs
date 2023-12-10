import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.method = params.method;
    this.auth = auth;
    this.setTitle("Alwadi | طلب");
    this.setStyle("/static/css/Order.css");
  }
  async getHtml() {
    localStorage.setItem("method", this.method);
    loading(true);
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        fetch("/static/siteJs/Order.js")
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
        if (Cart.length > 0) {
          return `
        <form id="Order">
            <div class="input">
                <label>محافظة</label>
                <input type="text" name="governorate" required/>
            </div>
            <div class="input">
                <label>المدينة</label>
                <input type="text" name="city" required/>
            </div>
            <div class="input">
                <label>الشارع</label>
                <input type="text" name="street" required/>
            </div>
            <div class="input">
                <label>المبنى</label>
                <input type="text" name="building" required/>
            </div>
            <div class="input">
                <label>طابق</label>
                <input type="text" name="floor" required/>
            </div>
            <div class="input">
                <button type="submit">اطلب الان</button>
            </div>
        </form>
        `;
        } else {
          CreateToast({
            type: "error",
            message: "عربة التسوق فارغة",
            time: 2000,
          });
          setTimeout(() => {
            location.replace("/");
          }, 2000);
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
