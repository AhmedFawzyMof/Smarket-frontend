import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Alwadi | Profile");
    this.setStyle("/static/css/profile.css");
  }
  async getHtml() {
    if (this.auth) {
      loading(true);

      if (localStorage.getItem("AuthToken")) {
        const response = await fetch("http://localhost:5500/profile", {
          method: "post",
          body: JSON.stringify({
            token: localStorage.getItem("AuthToken"),
          }),
        });

        const data = await response.json();
        const user = data.User
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
        fetch("/static/siteJs/profile.js")
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
          <div class="profile">
            <p>الاسم: ${user.Username}</p>
            <p>بريد إلكتروني: ${user.Email}</p>
            <p>رقم الهاتف: ${user.Phone}</p>
            <p>الهاتف الاحتياطي: ${user.Spare_phone}</p>
            <button onclick="logout()">تسجيل خروج</button>
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
