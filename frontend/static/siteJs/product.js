"use strict";

var labels = document.querySelectorAll(".types label");
var radios = document.querySelectorAll('.types input[type="radio"]');
var types = document.querySelector(".types");
console.log(types);
radios.forEach(function (radio, i) {
  var label = labels[i];
  radio.addEventListener("change", function () {
    labels.forEach(function (label) {
      label.style.transition = "0.3s";
      label.style.border = "none";
    });
    // Add border to the selected label
    if (radio.checked) {
      label.style.border = "4px solid #f8931f";
    }
  });
});
function addTo(id, image, name) {
  var Portions = document.querySelectorAll('.types input[type="radio"]');
  var checkedRadio;
  Portions.forEach(function (radio) {
    if (radio.checked) {
      checkedRadio = radio;
    }
  });
  if (!checkedRadio) {
    CreateToast({
      type: "error",
      message: "من فضلك اختر الوزن",
      time: 3000
    });
    return;
  }
  var product = checkedRadio.parentElement;
  var ProductId = id;
  var weightId = product.id;
  var weight = parseInt(product.querySelector(".weight").id);
  var price = product.querySelector("#price").value;
  var size = product.querySelector("#size").value;
  var CartProduct = {
    id: parseInt(ProductId),
    name: name,
    weight: weight,
    price: parseInt(price),
    image: image,
    size: size,
    typeId: parseInt(weightId),
    quantity: 1
  };
  if (!Cart.length > 0) {
    Cart.push(CartProduct);
    CreateToast({
      type: "success",
      message: "تمت إضافة المنتج إلى سلة التسوق",
      time: 3000
    });
  } else {
    var CartItem = Cart.find(function (element, index) {
      Object.assign(element, {
        index: index
      });
      return element.id == CartProduct.id && element.weight == CartProduct.weight;
    });
    if (CartItem == undefined) {
      Cart.push(CartProduct);
      CreateToast({
        type: "success",
        message: "تمت إضافة المنتج إلى سلة التسوق",
        time: 3000
      });
    } else {
      CreateToast({
        type: "error",
        message: "المنتج موجود بالفعل في سلة التسوق",
        time: 3000
      });
    }
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  cartLength();
}