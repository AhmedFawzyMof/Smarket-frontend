import Home from "./views/Home.mjs";
import Profile from "./views/Profile.mjs";
import OrderHistory from "./views/OrderHistory.mjs";
import Product from "./views/Product.mjs";
import Compony from "./views/Compony.mjs";
import Category from "./views/Category.mjs";
import Cart from "./views/Cart.mjs";
import Login from "./views/Login.mjs";
import Register from "./views/Register.mjs";
import Favourite from "./views/Favourite.mjs";
import OrderMethod from "./views/OrderMethod.mjs";
import Order from "./views/Order.mjs";
import OrderSuccess from "./views/OrderSuccess.mjs";
import Offers from "./views/Offers.mjs";
import SubCategories from "./views/SubCategories.mjs";
import OrderPage from "./views/OrderPage.mjs";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home, auth: false },
    { path: "/cart", view: Cart, auth: false },
    { path: "/login", view: Login, auth: false },
    { path: "/register", view: Register, auth: false },
    { path: "/profile", view: Profile, auth: true },
    { path: "/product/:id", view: Product, auth: false },
    { path: "/compony/:name", view: Compony, auth: false },
    { path: "/category/:name", view: Category, auth: false },
    { path: "/subcategory/:name", view: SubCategories, auth: false },
    { path: "/orderHistory", view: OrderHistory, auth: true },
    { path: "/fav", view: Favourite, auth: true },
    { path: "/offers", view: Offers, auth: false },
    { path: "/OrderMethod", view: OrderMethod, auth: true },
    { path: "/Order/:method", view: Order, auth: true },
    { path: "/order/success", view: OrderSuccess, auth: true },
    { path: "/order/:id", view: OrderPage, auth: true },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match), match.route.auth);

  if (match.route.auth) {
    if (localStorage.getItem("AuthToken")) {
      document.querySelector("#app").innerHTML = await view.getHtml();
    } else {
      document.querySelector("#app").innerHTML = await view.getHtml();
    }
  } else {
    document.querySelector("#app").innerHTML = await view.getHtml();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else if (e.target.parentElement.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.parentElement.href);
    }
  });

  router();
});
