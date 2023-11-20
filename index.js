import { RouterFactory } from "./gui/route/router.js";
import "./gui/styles/styles.css";

console.log("Log:Starting");

(async () => {
  await true;

  console.log("Log:Importing");
  await import("./gui/components/auth-form/component.js");
  await import("./gui/components/welcome-window/component.js");

  let router = RouterFactory.createInstance();

  router.add("auth", "auth-page");
  router.add("tasks", "tasks-page");
  router.default("auth");

  router.go();

  // let nodeAuthForm = document.createElement("auth-form");
  // let welcome = document.createElement("welcome-window");
  // let nodeApp = document.getElementById("app");
  // nodeApp.appendChild(welcome);
  // nodeApp.appendChild(nodeAuthForm);

  console.log("Log:Document is ready:");
  console.log(document);
})();

console.log("Log:Finishing");
