async function addToFav(productId) {
  if (localStorage.getItem("AuthToken")) {
    const response = await fetch("http://192.168.1.5:5500/fav/add", {
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
        window.location = "/login";
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

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  let src = images[i].src;

  if (src.startsWith("blob:")) {
    URL.revokeObjectURL(src);
  }
}
