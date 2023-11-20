import template from "./template.js";

class AuthPage extends HTMLElement {
  constructor() {
    console.log("constructor auth-page...");
    super();
    this._shadow = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    console.log("connectedCallback auth-page...");
    this._render();
  }

  disconnectedCallback() {
    console.log("disconnectedCallback auth-page...");
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr, prev, next) {
    console.log("attributeChangedCallback auth-page...");
  }

  _render() {
    console.log("_render auth-page...");
    if (!this.ownerDocument.defaultView) return;
    this._shadow.innerHTML = template(this);
  }
}

customElements.define("auth-page", AuthPage);
console.log("Log:Defining auth-page");
