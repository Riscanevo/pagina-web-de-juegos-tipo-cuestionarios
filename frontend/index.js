//TOMO LOS ELEMENTOS DEL HTML//
const nombre = document.querySelector("#nombre");
const btncomenzar = document.querySelector("#comenzar")

//AGREGO UN EVENT LISTENER AL BOTON DE COMENZAR//
btncomenzar.addEventListener("click", () => {

    //SETEO DE VALORES DEL LOCALSTORAGE QUE SERAN NECESARIOS//
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("puntaje-total", 0)

    //ELIMINO DEL LOCAL STORAGE LAS CATEGORIAS QUE YA JUGO//
    localStorage.removeItem("categorias-jugadas")

    //LO DIRIGIO A LA PARTE DEL MENU//
    location.href = "menu.html"


})