async function delToFav(productId) {
  const response = await fetch("http://localhost:5500/fav/delete", {
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
      window.location = "/login";
    }, 2000);
  } else {
    CreateToast({
      type: "success",
      message: "تمت إزالة المنتج من المفضلة",
      time: 2000,
    });
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
