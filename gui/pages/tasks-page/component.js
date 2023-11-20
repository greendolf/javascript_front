import template from "./template.js";

class TasksPage extends HTMLElement {
  constructor() {
    console.log("constructor tasks-page...");
    super();
    this._shadow = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    console.log("connectedCallback tasks-page...");
    this._render();
  }

  disconnectedCallback() {
    console.log("disconnectedCallback tasks-page...");
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr, prev, next) {
    console.log("attributeChangedCallback tasks-page...");
  }

  _render() {
    console.log("_render tasks-page...");
    if (!this.ownerDocument.defaultView) return;
    this._shadow.innerHTML = template(this);
  }
}

customElements.define("tasks-page", TasksPage);
console.log("Log:Defining tasks-page");
