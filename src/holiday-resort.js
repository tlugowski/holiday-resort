import "bootstrap/dist/css/bootstrap.css";
import "./holiday-resort.scss";
import { Navigation } from "./navigation/Navigation";
import { Home } from "./views/HomeView";
import { HeaderView } from "./views/HeaderView";

const body = document.querySelector("body");

body.prepend(HeaderView());

const main = document.querySelector("main");

main.before(Navigation());

Home().then(LoginViewContainer => {
  main.append(LoginViewContainer);
});

document.body.addEventListener("navigate", async event => {
  const { detail: Component } = event;
  main.innerHTML = "";
  main.append(await Component());
});
