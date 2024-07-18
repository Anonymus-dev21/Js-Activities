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



const productosEnCarrito = JSON.parse(localStorage.getItem("productos"))

function actualizarCantidadCarrito() {

    let numCarrito = document.querySelector(".carrito__cantidad")
    let numActualizado = productosEnCarrito.reduce((acc, valor) => acc + valor.cantidad, 0)
    numCarrito.innerText = numActualizado
}
if (productosEnCarrito) {
    actualizarCantidadCarrito()
}