class Movies extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/list/movies.css">
        <div id="contenido">
    <div class="scroll_horizontal">
        <h2>Recommended for You</h2>
        <div class="ancho" id="ancho">
<div class="pelicula">
<a href="#">
    <div class="card" id="card1"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card2"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>


<div class="pelicula">
<a href="#">
    <div class="card" id="card3"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card4"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>


<div class="pelicula">
<a href="#">
    <div class="card" id="card8"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>

<div class="pelicula">
<a href="#">
    <div class="card" id="card88"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card5"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card6"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card7"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div></div>
    </div>
    
    <div class="fila scroll_horizontal">
        <h2>Trends of the Week</h2>
        <div class="ancho" id="ancho2">
<div class="pelicula">



<a href="#">
    <div class="card" id="card9"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>

<div class="pelicula">
<a href="#">
    <div class="card" id="card16"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>

<div class="pelicula">
<a href="#">
    <div class="card" id="card17"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>

<div class="pelicula">
<a href="#">
    <div class="card" id="card10"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card11"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card12"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card13"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card14"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div>
<div class="pelicula">
<a href="#">
    <div class="card" id="card15"></div>
</a>
<div class="estrellas">Rating
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_fill_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">
<img src="./src/img/yellow_outline_star.png" alt="">&nbsp;&nbsp;
</div>
</div></div>
    </div>
</div>
        
    <br>
        `;
    }
}

customElements.define('my-movies', Movies);
export default Movies;