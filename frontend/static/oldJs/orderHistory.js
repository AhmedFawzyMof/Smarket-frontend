async function CancelOrder(OrderId, Confirmed) {
  const cancel_order = await fetch("http://localhost:5500/delete", {
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
      location.reload();
    }, 1000);
  } else {
    CreateToast({
      type: "error",
      message: "تم تأكيد الطلب بالفعل",
      time: 2000,
    });

    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
