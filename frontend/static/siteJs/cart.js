"use strict";

function inc(productId) {
  var inCart = Cart.find(function (product, index) {
    Object.assign(product, {
      index: index
    });
    return product.id === productId;
  });
  if (inCart !== undefined) {
    var productDiv = document.getElementById(productId.toString());
    var PT = productDiv.querySelector("#PT");
    var quan = productDiv.querySelector("#quan");
    if (inCart.quantity <= inCart.inStock - 1) {
      inCart.quantity += 1;
    } else {
      inCart.quantity = inCart.inStock;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    PT.innerHTML = inCart.price * inCart.quantity + " ج";
    quan.innerHTML = inCart.quantity;
    TotalT();
  }
}
function dec(productId) {
  var inCart = Cart.find(function (product) {
    return product.id === productId;
  });
  if (inCart !== undefined) {
    var productDiv = document.getElementById(productId.toString());
    var PT = productDiv.querySelector("#PT");
    var quan = productDiv.querySelector("#quan");
    if (inCart.quantity !== 1) {
      inCart.quantity -= 1;
    } else {
      inCart.quantity = 1;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    PT.innerHTML = inCart.price * inCart.quantity + " ج";
    quan.innerHTML = inCart.quantity;
    TotalT();
  }
}
function TotalT() {
  var productTotal = Cart.reduce(function (acc, curr) {
    return acc + curr.quantity * curr.price;
  }, 0);
  if (length !== 0) {
    quantityInCart.innerHTML = length;
    cartA.appendChild(quantityInCart);
  }
  var TP = document.getElementById("TP");
  var TotalPro = document.getElementById("TotalPro");
  TP.innerHTML = productTotal + " ج";
  TotalPro.innerHTML = "منتجات " + cartLength();
}
function removeAll() {
  localStorage.setItem("cart", "[]");
  cartLength();
  location.reload();
}
function removeProduct(Product) {
  var TheProduct = Cart.find(function (product, index) {
    Object.assign(product, {
      index: index
    });
    return product.id === Product;
  });
  Cart.splice(TheProduct.index, 1);
  localStorage.setItem("cart", JSON.stringify(Cart));
  location.reload();
}