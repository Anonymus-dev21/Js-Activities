const productosEnCarrito = JSON.parse(localStorage.getItem("productos"))

function actualizarCantidadCarrito() {

    let numCarrito = document.querySelector(".carrito__cantidad")
    let numActualizado = productosEnCarrito.reduce((acc, valor) => acc + valor.cantidad, 0)
    numCarrito.innerText = numActualizado
}
if (productosEnCarrito) {
    actualizarCantidadCarrito()
}

// =========================================NAVBAR=====================================================================

document.querySelector(".menu__navbar").addEventListener("click", aparecerMenu)
const bgDrk = document.querySelector(".drk__bg")
document.querySelector(".x").addEventListener("click", ocultarMenu)
const nav = document.querySelector(".nav")

bgDrk.addEventListener("click", ocultarMenu)

function aparecerMenu() {
    nav.style.right = "0"
    bgDrk.style.display = "block"
}

function ocultarMenu() {
    nav.style.right = "-100%"
    bgDrk.style.display = "none"

}

// =========================================FIN NAVBAR=================================================================

// =================================================ACORDEONES======================================================
const acordeonTop = document.querySelectorAll(".acordeon__container")
const arrowAcordeon = document.querySelectorAll("#arrow__acordeon")
const acordeonDsc = document.querySelectorAll(".acordeon__dsc")

acordeonTop.forEach((acordeon) => {
    acordeon.addEventListener("click", () => {
        let arrow = acordeon.querySelector("#arrow__acordeon")
        arrow.classList.toggle("rotate")

        let descripcion = acordeon.querySelector(".acordeon__dsc");
        descripcion.classList.toggle("active");

    })
})