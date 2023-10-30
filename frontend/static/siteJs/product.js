"use strict";

function addTo() {
  var product = JSON.parse(document.getElementById("productId").value);
  var productName = JSON.parse(document.getElementById("productName").value);
  var productImage = JSON.parse(document.getElementById("productImage").value);
  var productPrice = JSON.parse(document.getElementById("productPrice").value);
  var productInStock = JSON.parse(document.getElementById("productInStock").value);
  var quantity = JSON.parse(document.getElementById("quantity").value);
  var item = {
    id: product,
    name: productName,
    price: productPrice,
    image: productImage,
    inStock: productInStock,
    quantity: quantity
  };
  if (!Cart.length > 0) {
    Cart.push(item);
  } else {
    var CartItem = Cart.find(function (element, index) {
      Object.assign(element, {
        index: index
      });
      return element.id == item.id;
    });
    if (CartItem === undefined) {
      Cart.push(item);
    } else {
      Cart.splice(CartItem.index, 1);
      Cart.push(item);
    }
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  cartLength();
}