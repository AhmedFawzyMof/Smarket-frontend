function register() {
  const RegisterForm = document.getElementById("register");

  RegisterForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const form = {};

    for (const pair of formData) {
      switch (pair[0]) {
        case "username":
          Object.assign(form, { username: pair[1] });
          break;
        case "email":
          Object.assign(form, { email: pair[1] });
          break;
        case "password":
          Object.assign(form, { password: pair[1] });
          break;
        case "password2":
          Object.assign(form, { password2: pair[1] });
          break;
        case "phone":
          Object.assign(form, { phone: pair[1] });
          break;
        case "spare_phone":
          Object.assign(form, { spare_phone: pair[1] });
          break;
        default:
          Object.assign(form, { terms: pair[1] });
          break;
      }
    }
    console.log(form);
    const response = await fetch("http://localhost:5500/user/register", {
      method: "post",
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: data.Message,
        time: 7000,
      });
    } else {
      localStorage.setItem("AuthToken", data.token);
      CreateToast({
        type: "success",
        message: "تم إنشاء الحساب بنجاح",
        time: 2000,
      });
      CreateToast({
        type: "success",
        message: "تم تسجيل الدخول بنجاح",
        time: 2000,
      });
      setTimeout(() => {
        location.replace("/");
      }, 2000);
    }
  });
}
register();
