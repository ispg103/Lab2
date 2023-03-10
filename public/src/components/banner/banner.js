class Banner extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/banner/banner.css">
        <div class="main">
        <img src="./src/img/banner.jpeg" class="big">
        <div class="title">Outer Banks</div>
        <div class="rate">(4.8 Ratings)</div>
        <div class="text"> On an island of haves and have-nots, teen John B
         enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.</div>
        <img src="./src/img//baseline_play_arrow_white_48dp.png" class="image" id="play">
        <img src="./src/img/info.png" class="image" id="save">
        <div class="age">15+</div>
    </div>`;
    }
}

customElements.define('my-banner', Banner);
export default Banner;