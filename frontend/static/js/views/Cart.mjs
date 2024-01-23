import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("My Cart");
    this.setStyle("/static/css/cart.css");
  }

  async getHtml() {
    loading(true);
    if (Cart.length > 0) {
      let width = screen.width;

      function Total() {
        const productTotal = Cart.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);

        if (width >= 551) {
          if (length !== 0) {
            quantityInCart.innerHTML = length;
            cartA[0].appendChild(quantityInCart);
          }
        } else {
          if (length !== 0) {
            quantityInCart.innerHTML = length;
            cartA[1].appendChild(quantityInCart);
          }
        }
        return productTotal;
      }
      function productsIncart() {
        const width = screen.width;
        function isLong(product) {
          if (width >= 551) {
            return product.name;
          } else {
            return product.name.substr(0, 15) + "...";
          }
        }
        let Products = "";
        Cart.forEach((product) => {
          const imageId = product.image;

          return (Products += `
        <div id='${product.id}${product.weight}' class='productB'>
            <img src="http://localhost:5500/${imageId}"/>
            <div class="ditails">
              <a data-link href="/product/${product.id}">
                ${isLong(product)}
              </a>
              <p class="weight">الوزن: ${product.size}</p>
            </div>
            <div class='quantityDiv'>
                <div id="productFunc">
                    <button id='inc' onclick='inc(${product.id}, ${
            product.weight
          })'>
                        <i class='bx bx-plus'></i>
                    </button>
                        <p id='quan'>${product.quantity}</p>
                    <button id='dec' onclick='dec(${product.id}, ${
            product.weight
          })'>
                        <i class='bx bx-minus'></i>
                    </button>
                </div>
                <div id="productTotal">
                    <p id='PT'>${product.price * product.quantity} ج<p>
                    <button onclick="removeProduct(${product.id}, ${
            product.weight
          })">
                    <i class='bx bxs-trash'></i>
                    </button>
                </div>
            </div>
        </div>
        `);
        });
        return Products;
      }
      const cartDiv = `
    <div class='Thecart'>
        <div class='head'>
            <p>سلة التسوق</p>
            <p></p>
        </div>
        <div class='body'>
            ${productsIncart()}
        </div>
        <div class='bottomT'>
            <div class='total'>
                <div>
                    <h3>الإجمالي</h3>
                    <p id='TotalPro'>منتجات ${cartLength()}</p>
                </div>
                <h2 id='TP'>${Total()} ج</h2>
            </div>
            <a href="/OrderMethod" data-link>الدفع</a>
        </div>
    </div>
    `;
      fetch("/static/siteJs/cart.js")
        .then(function (response) {
          if (!response.ok) {
            return false;
          }
          return response.blob();
        })
        .then(function (myBlob) {
          var objectURL = URL.createObjectURL(myBlob);
          const oldScripts = document.querySelectorAll("[data-script]");
          oldScripts.forEach((script) => {
            if (script.src !== objectURL) {
              document.head.removeChild(script);
            }
          });
          var sc = document.createElement("script");
          sc.setAttribute("src", objectURL);
          sc.setAttribute("data-script", "");
          sc.setAttribute("type", "text/javascript");

          document.head.appendChild(sc);
          sc.onload = () => {
            URL.revokeObjectURL(objectURL);
          };
        });
      loading(false);
      return cartDiv;
    } else {
      loading(false);
      return `
      <div id='emptyCart'>
        <p>عربة التسوق فارغة</p>
        <span>0</span>
        <img src='/static/img/cart.png' />
        <a data-link href="/">اذهب للتسوق</a>
      </div>
      `;
    }
  }
}
