import template from "./template.js";

import { StoreFactory } from "../../../domain/store.js";

class Welcome extends HTMLElement {
  constructor() {
    console.log("constructor welcome...");
    super();
    this._shadow = this.attachShadow({ mode: "closed" });
    this._login = "";
    StoreFactory.createInstance().subscribe(
      "login",
      this.checkState.bind(this)
    );
  }

  connectedCallback() {
    console.log("connectedCallback welcome...");
    this._render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr, prev, next) {}

  _render() {
    console.log("_render welcome...");
    if (!this.ownerDocument.defaultView) return;
    this._shadow.innerHTML = template(this);
  }

  checkState(state) {
    switch (state.name) {
      case "login":
        this._login = state.new_value;
        this._render();
        break;
    }
  }
}

customElements.define("welcome-window", Welcome);
console.log("Log:Defining welcome-window");
