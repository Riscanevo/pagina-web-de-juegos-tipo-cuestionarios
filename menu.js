//TOMAMOS LOS ELEMENTOS HTML //
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

//ASIGNAMOS LA INFO DEL LOCAL STORAGE//
nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

//RECUPERO EL PUNTAJE EN CASO DE QUE YA ESTE JUGANDO //
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;

} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// VAMOS A NECESITAR UNA ESTRUCTURA PARA GUARDAR LAS CATEGORIAS YA JUGADAS//
let categoriasJugadas;

//controlo si ya hay algo cargado en el localstorage cuando vuelvo de//
//jugar (osea de juego.html) para cargar las categorías ya jugadas//
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if (categoriasJugadasLS) {
    categoriasJugadas = categoriasJugadasLS;
} else {//COMIENZO UN ARREGLO VACIO //
    categoriasJugadas = [];

}

console.log(categoriasJugadas);


//Agrego un event listener click a todas las opciones de categoria
function agregarEventListenerOpciones() {
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", (e) => {
            console.log(e.currentTarget.id);

            //almaceno la categorìa que se eligiò en el Local Storage
            localStorage.setItem("categoria-actual", e.currentTarget.id);

            //Agrego al arreglo la categoría
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            console.log(categoriasJugadas);

            //re dirijo a la pàgina del juego
            location.href = "juego.html";
        });
    });

    //desabilito las categorías que ya se jugaron
    categorias.forEach(categoria => {
        if (categoriasJugadas.includes(categoria.id)) {
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })
}
agregarEventListenerOpciones();

