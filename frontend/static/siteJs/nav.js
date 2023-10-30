"use strict";

var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");
var resultSearch = document.querySelector(".resFS");
var body = document.body;
var PCnav = document.getElementById("PC");
var MOnav = document.getElementById("MO");
var Cart = JSON.parse(localStorage.getItem("cart"));
var width = screen.width;
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.style.right = "5px";
  } else {
    if (width <= 450) {
      menu.style.right = "-100%";
    } else {
      menu.style.right = "-320px";
    }
  }
});
var cartA = document.querySelectorAll(".cart");
var quantityInCart = document.createElement("span");
quantityInCart.setAttribute("id", "count");
function cartLength() {
  var Thecart = JSON.parse(localStorage.getItem("cart"));
  var length = 0;
  if (Thecart.length > 0) {
    length = Thecart.reduce(function (acc, curr) {
      return acc + curr.quantity;
    }, 0);
  }
  if (width >= 551) {
    if (length !== 0) {
      quantityInCart.innerHTML = length;
      cartA[0].appendChild(quantityInCart);
    } else {
      cartA[0].innerHTML = '<i class="bx bx-cart-alt"></i>';
    }
  } else {
    if (length !== 0) {
      quantityInCart.innerHTML = length;
      cartA[1].appendChild(quantityInCart);
    } else {
      cartA[1].innerHTML = '<i class="bx bx-cart-alt"></i>';
    }
  }
  return length;
}
cartLength();
var toastBox = document.getElementById("toastBox");
function CreateToast(options) {
  var toast = document.createElement("div");
  var toastaf = document.createElement("div");
  toast.classList.add("toast");
  toastaf.classList.add("toastafter");
  if (options.type == "success") {
    toast.classList.add("success");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  } else if (options.type == "invalid") {
    toast.classList.add("invalid");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  } else {
    toast.classList.add("error");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  }
  toast.appendChild(toastaf);
  var sec = options.time / 1000;
  toastaf.style.animation = "anim " + sec + "s linear forwards";
  setTimeout(function () {
    toast.remove();
  }, options.time);
}
function loading(condition) {
  var app = document.getElementById("app");
  var loadingPage = document.getElementById("loadingPage");
  if (condition == true) {
    app.style.display = "none";
    loadingPage.style.display = "flex";
  } else {
    app.style.display = "flex";
    loadingPage.style.display = "none";
  }
}
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}