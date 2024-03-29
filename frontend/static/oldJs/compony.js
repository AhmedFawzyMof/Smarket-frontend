function addItemToCart(productId) {
  var Product = document.getElementById(productId);
  var id = Product.querySelector("#productId").value;
  var name = Product.querySelector("#productName").value;
  var price = Product.querySelector("#productPrice").value;
  var inStock = Product.querySelector("#productInStock").value;
  var image = Product.querySelector("#productImage").value;
  var unit = Product.querySelector("#unit").value;
  var unitNumber = Product.querySelector("#unitNumber").value;
  var quantity = 1;
  var product = {
    id: parseInt(id),
    name: name,
    price: parseInt(price),
    image: image,
    unit: unit,
    unitNumber: parseInt(unitNumber),
    inStock: parseInt(inStock),
    quantity: quantity,
  };
  if (Cart.length == 0) {
    Cart.push(product);
    CreateToast({
      type: "success",
      message: "تمت إضافة المنتج إلى سلة التسوق",
      time: 5000,
    });
  } else {
    var CartItem = Cart.find(function (element) {
      return element.id == product.id;
    });
    if (CartItem === undefined) {
      Cart.push(product);
      CreateToast({
        type: "success",
        message: "تمت إضافة المنتج إلى سلة التسوق",
        time: 5000,
      });
    }
  }

  localStorage.setItem("cart", JSON.stringify(Cart));
  getProductsInCart();
}

function getProductsInCart() {
  const Products = document.querySelectorAll(".product");
  let ProductsInCart = [];
  Products.forEach((Product) => {
    const Id = parseInt(Product.attributes.id.value);
    Cart.forEach((cartItem) => {
      if (cartItem.id == Id) {
        ProductsInCart.push({
          id: cartItem.id,
          quantity: cartItem.quantity,
        });
      }
    });
  });
  replaceBtns(ProductsInCart);
}

function replaceBtns(products) {
  products.forEach((product) => {
    const newBtnDiv = document.createElement("div");
    newBtnDiv.setAttribute("id", "cartdiv");
    const PlusBtn = document.createElement("button");
    PlusBtn.setAttribute("id", "addQ");
    PlusBtn.innerHTML = "<i class='bx bx-plus'></i>";
    const MinusBtn = document.createElement("button");
    MinusBtn.setAttribute("id", "remoQ");
    MinusBtn.innerHTML = "<i class='bx bx-minus'></i>";
    const Quantity = document.createElement("p");
    Quantity.setAttribute("id", "Quantity");
    newBtnDiv.append(PlusBtn, Quantity, MinusBtn);
    const p = document.getElementById(product.id.toString());
    if (p !== null) {
      const button = p.querySelector("#addtocart");
      const fav = p.querySelector("#addtofav");

      if (button !== null) {
        p.replaceChild(newBtnDiv, button);
      }
      fav.style.top = "100px";

      const quantityDiv = p.querySelector("#Quantity");
      quantityDiv.innerText = product.quantity;
      PlusBtn.addEventListener("click", (e) => {
        incQuantity(product.id);
      });
      MinusBtn.addEventListener("click", (e) => {
        decQuantity(product.id);
      });
    }
  });
  cartLength();
}

function incQuantity(productId) {
  const res = Cart.find((item, index) => {
    Object.assign(item, { index: index });
    return item.id == productId;
  });
  if (res !== undefined) {
    if (res.quantity <= res.inStock - 1) {
      res.quantity += 1;
    } else {
      res.quantity = res.inStock;
    }
  }

  localStorage.setItem("cart", JSON.stringify(Cart));
  const products = [];
  Cart.forEach((item) => {
    products.push({
      id: item.id,
      quantity: item.quantity,
    });
  });
  replaceBtns(products);
}

function decQuantity(productId) {
  const res = Cart.find((item, index) => {
    Object.assign(item, { index: index });
    return item.id == productId;
  });
  if (res !== undefined) {
    if (res.quantity !== 1) {
      res.quantity -= 1;
    } else {
      res.quantity = 1;
    }
  }

  localStorage.setItem("cart", JSON.stringify(Cart));
  const products = [];
  Cart.forEach((item) => {
    products.push({
      id: item.id,
      quantity: item.quantity,
    });
  });
  replaceBtns(products);
}
if (cartLength() > 0) {
  getProductsInCart();
}

async function addToFav(productId) {
  if (localStorage.getItem("AuthToken")) {
    const response = await fetch("http://192.168.1.7:5500/fav/add", {
      method: "post",
      body: JSON.stringify({
        product: productId,
        token: localStorage.getItem("AuthToken"),
      }),
    });
    const data = await response.json();
    if (data.Error) {
      CreateToast({
        type: "error",
        message: "لقد حدث خطأ يرجى تسجيل الدخول",
        time: 5000,
      });
      localStorage.removeItem("AuthToken");
      setTimeout(() => {
        window.location = "/login";
      }, 5000);
    } else {
      if (data.Message === undefined) {
        CreateToast({
          type: "success",
          message: "تمت إضافة المنتج إلى المفضلة",
          time: 3000,
        });
      } else {
        CreateToast({
          type: "error",
          message: data.Message,
          time: 3000,
        });
      }
    }
  } else {
    CreateToast({
      type: "error",
      message: "لقد حدث خطأ يرجى تسجيل الدخول",
      time: 5000,
    });
  }
}

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  let src = images[i].src;

  if (src.startsWith("blob:")) {
    URL.revokeObjectURL(src);
  }
}
