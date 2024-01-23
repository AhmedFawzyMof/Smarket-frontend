async function CancelOrder(OrderId, Confirmed) {
  const cancel_order = await fetch("http://192.168.1.7:5500/delete", {
    method: "DELETE",
    body: JSON.stringify({
      token: localStorage.getItem("AuthToken"),
      order: OrderId,
      confirmed: `${Confirmed}`,
    }),
  });

  const response = await cancel_order.json();

  if (!response.Error) {
    CreateToast({
      type: "success",
      message: "تم الغاء الطلب بنجاح",
      time: 2000,
    });
    setTimeout(() => {
      reload();
    }, 1000);
  } else {
    CreateToast({
      type: "error",
      message: "تم تأكيد الطلب بالفعل",
      time: 2000,
    });

    setTimeout(() => {
      reload();
    }, 1000);
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
