class Header extends HTMLElement {

    static get observedAttributes() {
        return [];
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
        <img src="./src/img/lupa.png" class="lupa">
        <img src="./src/img/noti.png" class="noti">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" class="person">

    </div>
        `;
    }
}

customElements.define('my-header', Header);
export default Header;