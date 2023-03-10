import * as components from "./components/index.js";

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
    <my-banner></my-banner>
    <my-movies></my-movies>
    `;
  }
}

customElements.define("app-container", AppContainer);