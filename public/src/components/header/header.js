class Header extends HTMLElement {

    static get observedAttributes() {
        return ["home", "shows", "movies", ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/header/header.css">
        <div class="barra">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" class="image">
        <div class="home">Home </div>
        <div class="shows">TV Shows </div>
        <div class="movies"> Movies </div>
        <div class="new"> New & Popular </div>
        <div class="list"> My List </div>
        <img src="" class="image" id="person">
    </div>
        `;
    }
}

customElements.define('my-header', Header);
export default Header;