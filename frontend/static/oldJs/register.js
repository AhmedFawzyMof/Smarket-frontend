function register() {
  const RegisterForm = document.getElementById("register");

  RegisterForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const form = {};

    for (const pair of formData) {
      const key = pair[0];
      const value = pair[1];
      form[key] = value;
    }
    const response = await fetch(
      "https://smarket-api-5o9n.onrender.com/user/register",
      {
        method: "post",
        body: JSON.stringify(form),
      }
    );

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
