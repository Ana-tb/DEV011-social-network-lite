// file main.js finished
import home from "./home.js";
import inicioSesion from "./login.js";
import error from "./error.js";
import registro from "/register.js";
import walls from "./walls.js";

const routes = [
  { path: "/", component: home },
  { path: "/login", component: inicioSesion },
  { path: "/error", component: error },
  { path: "/register", component: registro },
  { path: "/walls", component: walls },
];

const defaultRoute = "/";
const root = document.getElementById("root");

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo("/error");
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
