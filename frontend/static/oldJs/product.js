function addTo() {
  const product = JSON.parse(document.getElementById("productId").value);
  const productName = JSON.parse(document.getElementById("productName").value);
  const productImage = JSON.parse(
    document.getElementById("productImage").value
  );
  const productPrice = JSON.parse(
    document.getElementById("productPrice").value
  );
  const productInStock = JSON.parse(
    document.getElementById("productInStock").value
  );
  const quantity = JSON.parse(document.getElementById("quantity").value);
  const item = {
    id: product,
    name: productName,
    price: productPrice,
    image: productImage,
    inStock: productInStock,
    quantity: quantity,
  };
  if (!Cart.length > 0) {
    Cart.push(item);
  } else {
    var CartItem = Cart.find(function (element, index) {
      Object.assign(element, { index: index });
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
