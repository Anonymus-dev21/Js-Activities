const productosEnCarrito= JSON.parse(localStorage.getItem("productos"))

function actualizarCantidadCarrito() {

    let numCarrito = document.querySelector(".carrito__cantidad")
    let numActualizado = productosEnCarrito.reduce((acc, valor) => acc + valor.cantidad, 0)
    numCarrito.innerText = numActualizado
}
if (productosEnCarrito) {
    actualizarCantidadCarrito()
}