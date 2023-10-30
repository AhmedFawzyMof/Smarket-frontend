const OrderForm = document.getElementById("Order");

OrderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading(true);
  const products = Cart;
  products.forEach(product => {
    delete product.inStock
    delete product.index
    delete product.name
    delete product.price
    delete product.image
  });
 
  const form = {};
  const formData = new FormData(OrderForm);
  for (const pair of formData) {
    const key = pair[0];
    const value = pair[1];
    form[key] = value;
  }
  console.log(form)
  const order = await fetch("http://localhost:5500/order", {
    method: "POST",
    body: JSON.stringify({
      products: products,
      Address: form,
      token: localStorage.getItem("AuthToken"),
      method: localStorage.getItem("method"),
    }),
  });

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
});
