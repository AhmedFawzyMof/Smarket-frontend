const OrderForm = document.getElementById("Order");

OrderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading(true);
  const products = Cart;
  products.forEach((product) => {
    delete product.name;
    delete product.index;
    delete product.image;
    delete product.price;
    delete product.size;
  });

  const form = {};
  const formData = new FormData(OrderForm);
  for (const pair of formData) {
    const key = pair[0];
    const value = pair[1];
    form[key] = value;
  }
  const order = await fetch("http://192.168.1.7:5500/order", {
    method: "POST",
    body: JSON.stringify({
      products: products,
      address: form,
      method: localStorage.getItem("method"),
      token: localStorage.getItem("AuthToken"),
    }),
  });

  if (!order.ok) {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("Cart");
    CreateToast({
      type: "error",
      message: "للأسف حدث خطأ برجاء المحاولة مرة اخرى",
      time: 2000,
    });
    setTimeout(() => {
      redirect();
    }, 1000);
  }
  const res = await order.json();

  console.log(res);

  if (res.Error) {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("Cart");
    CreateToast({
      type: "error",
      message: "للأسف حدث خطأ برجاء المحاولة مرة اخرى",
      time: 2000,
    });
    setTimeout(() => {
      redirect();
    }, 1000);
  } else {
    localStorage.removeItem("method");
    localStorage.setItem("cart", "[]");
    location.replace("/order/success");
    redirectS();
  }
  loading(false);
});

function redirect() {
  const a = document.createElement("a");
  a.href = "/";
  a.setAttribute("data-link", "");
  const body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
}

function redirectS() {
  const a = document.createElement("a");
  a.href = "/order/success";
  a.setAttribute("data-link", "");
  const body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
}
