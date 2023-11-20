import template from "./template.js";

import { StoreFactory } from "../../../domain/store.js";

class AuthForm extends HTMLElement {
  constructor() {
    console.log("constructor auth-form...");
    super();
    this._shadow = this.attachShadow({ mode: "closed" });
    this._login = "";
    this._password = "";
  }

  connectedCallback() {
    console.log("connectedCallback auth-form...");
    this._render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["login", "password"];
  }

  attributeChangedCallback(attr, prev, next) {
    console.log("attributeChangedCallback auth-form...");
    if (prev !== next) {
      if (attr === "login") {
        this._login = next;
      }
      if (attr === "password") {
        this._password = next;
      }
      this._render();
    }
  }

  _listener(event) {
    event.stopPropagation();
    let store = StoreFactory.createInstance();
    сonsole.log(`_listener, ${event.target.id}`);
    if (event.target.id == "loginBtn") {
    } else if (event.target.id == "registerBtn") {
    }
  }

  _render() {
    console.log("_render auth-form...");
    if (!this.ownerDocument.defaultView) return;
    if (!this._rendered) {
      this._shadow.innerHTML = template(this);

      this._shadow
        .querySelector("#login")
        .addEventListener("input", (event) => {
          this._login = event.target.value;
          StoreFactory.createInstance().doAction({
            type: "change_login",
            payload: { login: this._login },
          });
        });
      this._shadow
        .querySelector("#password")
        .addEventListener("change", (event) => {
          this._password = event.target.value;
          StoreFactory.createInstance().doAction({
            type: "change_password",
            payload: { login: this._login },
          });
        });

      this._rendered = true;
    }

    this._shadow
      .querySelector("#loginBtn")
      .addEventListener("click", (event) => {
        console.log("login_button clicked");
        StoreFactory.createInstance().doAction({
          type: "get_auth",
          payload: { login: this._login, password: this._password },
        });
      });
    this._shadow
      .querySelector("#registerBtn")
      .addEventListener("click", (event) => {
        console.log("register_button clicked");
      });
  }
}

customElements.define("auth-form", AuthForm);
console.log("Log:Defining auth-form");
