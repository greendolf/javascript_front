console.log("Log:Exporting router");

import "../pages/auth-page/component.js";
import "../pages/tasks-page/component.js";

class Router {
  constructor() {
    this._routes = {};
  }

  add(url, view) {
    this._routes[url] = document.createElement(view);
  }

  default(url) {
    this._routes["default"] = this._routes[url];
  }

  async go(url = "default") {
    let page = this._routes[url];
    console.log(page);
    if (page !== undefined) {
      let body = document.getElementsByTagName("body")[0];
      if (body.childNodes.length) {
        body.removeChild(body.childNodes[0]);
      }
      body.appendChild(page);
      history.pushState(null, null, url);
    }
  }
}

class RouterFactory {
  static _router = null;

  static _createInstance() {
    return new Router();
  }

  static createInstance() {
    if (RouterFactory._router === null) {
      RouterFactory._router = RouterFactory._createInstance();
    }
    return RouterFactory._router;
  }
}

export { RouterFactory };
