"use strict";

function inc(productId, productWeight) {
  var inCart = Cart.find(function (product, index) {
    Object.assign(product, {
      index: index
    });
    return product.id === productId && product.weight === productWeight;
  });
  if (inCart !== undefined) {
    var productDiv = document.getElementById(productId.toString() + "" + productWeight.toString());
    var PT = productDiv.querySelector("#PT");
    var quan = productDiv.querySelector("#quan");
    if (inCart.quantity <= 20) {
      inCart.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    PT.innerHTML = inCart.price * inCart.quantity + " ج";
    quan.innerHTML = inCart.quantity;
    TotalT();
  }
}
function dec(productId, productWeight) {
  var inCart = Cart.find(function (product) {
    return product.id === productId && product.weight === productWeight;
  });
  if (inCart !== undefined) {
    var productDiv = document.getElementById(productId.toString() + "" + productWeight.toString());
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
function removeProduct(Product, Weight) {
  var TheProduct = Cart.find(function (product, index) {
    Object.assign(product, {
      index: index
    });
    return product.id === Product && product.weight === Weight;
  });
  Cart.splice(TheProduct.index, 1);
  localStorage.setItem("cart", JSON.stringify(Cart));
  cartLength();
  reload();
}
function reload() {
  var a = document.createElement("a");
  a.href = "/cart";
  a.setAttribute("data-link", "");
  var body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
}