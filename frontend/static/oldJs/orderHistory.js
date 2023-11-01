async function CancelOrder(OrderId, Confirmed) {
  const deleteOrder = await fetch("http://localhost:5500/order/delete", {
    method: "post",
    body: JSON.stringify({
      token: localStorage.getItem("AuthToken"),
      order: OrderId,
      confirmed: `${Confirmed}`,
    }),
  });

  const response = await deleteOrder.json();

  if (!response.Error) {
    CreateToast({
      type: "success",
      message: "تم الغاء الطلب بنجاح",
      time: 2000,
    });
  }

  CreateToast({
    type: "error",
    message: "تم تأكيد الطلب بالفعل",
    time: 2000,
  });
}
