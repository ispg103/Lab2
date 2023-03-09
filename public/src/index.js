import * as components from "./components/header/header.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <my-header></my-header>
    `;
  }
}

customElements.define("app-container", AppContainer);