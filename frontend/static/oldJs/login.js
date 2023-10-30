function login() {
  const LoginForm = document.getElementById("login");

  LoginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    const form = {};

    for (const pair of formData) {
      const key = pair[0];
      const value = pair[1];
      form[key] = value;
    }

    const response = await fetch("http://localhost:5500/user/login", {
      method: "post",
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: data.Message,
        time: 5000,
      });
    } else {
      localStorage.setItem("AuthToken", data.token);
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
login();
