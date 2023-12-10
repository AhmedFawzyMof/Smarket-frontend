function inc(productId) {
  const inCart = Cart.find((product, index) => {
    Object.assign(product, { index: index });
    return product.id === productId;
  });
  if (inCart !== undefined) {
    const productDiv = document.getElementById(productId.toString());
    const PT = productDiv.querySelector("#PT");
    const quan = productDiv.querySelector("#quan");
    if (inCart.quantity <= 20) {
      inCart.quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(Cart));
    PT.innerHTML = inCart.price * inCart.quantity + " ج";
    quan.innerHTML = inCart.quantity;
    TotalT();
  }
}

function dec(productId) {
  const inCart = Cart.find((product) => {
    return product.id === productId;
  });
  if (inCart !== undefined) {
    const productDiv = document.getElementById(productId.toString());
    const PT = productDiv.querySelector("#PT");
    const quan = productDiv.querySelector("#quan");
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
  const productTotal = Cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  if (length !== 0) {
    quantityInCart.innerHTML = length;
    cartA.appendChild(quantityInCart);
  }

  const TP = document.getElementById("TP");
  const TotalPro = document.getElementById("TotalPro");
  TP.innerHTML = productTotal + " ج";
  TotalPro.innerHTML = "منتجات " + cartLength();
}

function removeAll() {
  localStorage.setItem("cart", "[]");
  cartLength();
  location.reload();
}

function removeProduct(Product) {
  const TheProduct = Cart.find((product, index) => {
    Object.assign(product, { index: index });
    return product.id === Product;
  });

  Cart.splice(TheProduct.index, 1);
  localStorage.setItem("cart", JSON.stringify(Cart));
  location.reload();
}

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  let src = images[i].src;

  if (src.startsWith("blob:")) {
    URL.revokeObjectURL(src);
  }
}
