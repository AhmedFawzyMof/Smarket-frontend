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
  try {
    const order = await fetch("http://192.168.1.5:5500/order", {
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
        location.replace("/");
      }, 1000);
    }
    const res = await order.json();

    if (res.Error) {
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("Cart");
      CreateToast({
        type: "error",
        message: "للأسف حدث خطأ برجاء المحاولة مرة اخرى",
        time: 2000,
      });
      setTimeout(() => {
        location.replace("/");
      }, 1000);
    }
    loading(false);
    localStorage.removeItem("method");
    localStorage.setItem("cart", "[]");
    location.replace("/order/success");
  } catch (error) {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("Cart");
    CreateToast({
      type: "error",
      message: "للأسف حدث خطأ برجاء المحاولة مرة اخرى",
      time: 2000,
    });
    setTimeout(() => {
      location.replace("/");
    }, 1000);
  }
});
