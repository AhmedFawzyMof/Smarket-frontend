function inc(productId, productWeight) {
  const inCart = Cart.find((product, index) => {
    Object.assign(product, { index: index });
    return product.id === productId && product.weight === productWeight;
  });
  if (inCart !== undefined) {
    const productDiv = document.getElementById(
      productId.toString() + "" + productWeight.toString()
    );
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

function dec(productId, productWeight) {
  const inCart = Cart.find((product) => {
    return product.id === productId && product.weight === productWeight;
  });
  if (inCart !== undefined) {
    const productDiv = document.getElementById(
      productId.toString() + "" + productWeight.toString()
    );
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

function removeProduct(Product, Weight) {
  const TheProduct = Cart.find((product, index) => {
    Object.assign(product, { index: index });
    return product.id === Product && product.weight === Weight;
  });
  Cart.splice(TheProduct.index, 1);
  localStorage.setItem("cart", JSON.stringify(Cart));
  cartLength();
  reload();
}

function reload() {
  const a = document.createElement("a");
  a.href = "/cart";
  a.setAttribute("data-link", "");
  const body = document.body;
  body.appendChild(a);
  a.style.zIndex = -10;
  a.click();
}
