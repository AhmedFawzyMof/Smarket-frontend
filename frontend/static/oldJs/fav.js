async function delToFav(productId) {
  const response = await fetch("http://192.168.1.7:5500/fav/delete", {
    method: "DELETE",
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
      time: 2000,
    });
    localStorage.removeItem("AuthToken");
    setTimeout(() => {
      redirect();
    }, 2000);
  } else {
    CreateToast({
      type: "success",
      message: "تمت إزالة المنتج من المفضلة",
      time: 2000,
    });
    setTimeout(() => {
      reload();
    }, 2000);
  }
}

function reload() {
  const a = document.createElement("a");
  a.href = "/fav";
  a.setAttribute("data-link", "");
  const body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
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
