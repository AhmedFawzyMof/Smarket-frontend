async function addToFav(productId) {
  if (localStorage.getItem("AuthToken")) {
    const response = await fetch("http://192.168.1.7:5500/fav/add", {
      method: "post",
      body: JSON.stringify({
        product: productId,
        token: localStorage.getItem("AuthToken"),
      }),
    });
    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول",
        time: 5000,
      });
      localStorage.removeItem("AuthToken");
      setTimeout(() => {
        redirect();
      }, 5000);
    } else {
      if (data.Message === undefined) {
        CreateToast({
          type: "success",
          message: "تمت إضافة المنتج إلى المفضلة",
          time: 3000,
        });
      } else {
        CreateToast({
          type: "error",
          message: data.Message,
          time: 3000,
        });
      }
    }
  } else {
    CreateToast({
      type: "error",
      message: "لقد حدث خطأ يرجى تسجيل الدخول",
      time: 5000,
    });
  }
}

function redirect() {
  const a = document.createElement("a");
  a.href = "/";
  a.setAttribute("data-link", "");
  const body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
}
