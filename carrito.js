const containerGeneral = document.querySelector(".carrito__container")
const generalContainer = document.querySelector(".general__container")
const productosAgregados = JSON.parse(localStorage.getItem("productos"))
const mensajeCarritoVacio = document.querySelector(".mensaje__carrito__vacio")
let btnsEliminar = document.querySelectorAll(".dlte")
let btnsResta = document.querySelectorAll(".resta")
let btnsSuma = document.querySelectorAll(".suma")


function aparecerCarrito() {
    if (productosAgregados && productosAgregados.length > 0) {

        generalContainer.style.display = "flex"
        mensajeCarritoVacio.style.display = "none"
        containerGeneral.innerHTML = "";

        if (productosAgregados) {
            productosAgregados.forEach(producto => {
                const div = document.createElement("div")
                div.classList.add("carrito__producto")

                div.innerHTML = `
    <div class="imagen__nombre__producto">
    <div class="imagen__nombre__producto--img">
    <img src="${producto.img}" title="${producto.title}" alt="">
    </div>
    <div class="imagen__nombre__producto--txt">
    <span>${producto.nombre}</span>
    </div>
    </div>
    <div class="cantidad__precio">
    <div class="cantidad__producto" id="producto">
    <p>cantidad: <span>${producto.cantidad}</span></p>
    </div>
    <div class="cantidad__producto" id="precio">
    <p>Precio total: <span>${producto.cantidad * producto.precio}</span></p>
    </div>
    </div>
    <div class="iconos___producto">
    <div class="suma" id="${producto.nombre}">
    <button class="cart__button" >
    <span class="effect"> </span>
    <i class="fa-solid fa-plus"></i>
    </button>
    </div>
    <div class="dlte" id="${producto.nombre}">
    <button class="cart__button">
    <span class="effect"> </span>
    <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
    <div class="resta" id="${producto.nombre}">
    <button class="cart__button">
    <span class="effect"> </span>
    <i class="fa-solid fa-minus"></i>
                            </button>
    
                        </div>
                    </div>`
                containerGeneral.appendChild(div)
            });
        }
        actualizarbtnElminar()
        actualizarBotonResta()
        actualizarBotonSuma()
    } else {
        mensajeCarritoVacio.style.display = "flex"
        generalContainer.style.display = "none";
    }
}
aparecerCarrito()



function actualizarBotonResta() {
    btnsResta = document.querySelectorAll(".resta")
    btnsResta.forEach((btn) => {
        btn.addEventListener("click", restarCantidad)
    })
}

function actualizarBotonSuma() {
    btnsSuma = document.querySelectorAll(".suma")
    btnsSuma.forEach((btn) => {
        btn.addEventListener("click", sumarCantidad)
    })
}


function actualizarbtnElminar() {
    btnsEliminar = document.querySelectorAll(".dlte")
    btnsEliminar.forEach((btn) => {
        btn.addEventListener("click", borrarElementoCarrito)
    })
}

function borrarElementoCarrito(e) {
    let idbtnEliminar = e.currentTarget.id;
    const index = productosAgregados.findIndex((index) => index.nombre == idbtnEliminar)
    productosAgregados.splice(index, 1)
    actualizarResumen()
    actualizarCantidadCarrito()
    localStorage.setItem("productos", JSON.stringify(productosAgregados));
    aparecerCarrito()
    mostrarResumen()
    if (productosAgregados && productosAgregados.length > 0) {
        actualizarResumenPrecios()
    }
}

function restarCantidad(e) {
    let idBtnResta = e.currentTarget.id;
    const index = productosAgregados.findIndex((idx) => idx.nombre === idBtnResta)

    if (productosAgregados[index].cantidad > 1) {
        productosAgregados[index].cantidad--;

    } else {
        productosAgregados.splice(index, 1)
        console.log(productosAgregados)

    }

    localStorage.setItem("productos", JSON.stringify(productosAgregados));
    if (productosAgregados && productosAgregados.length > 0) {
        actualizarResumenPrecios()
    }
    mostrarResumen()
    actualizarResumen()

    actualizarCantidadCarrito()
    aparecerCarrito()
}

function sumarCantidad(e) {
    let idBtnSuma = e.currentTarget.id;
    const index = productosAgregados.findIndex(pdto => pdto.nombre === idBtnSuma)

    if (productosAgregados[index].cantidad >= 1) {
        productosAgregados[index].cantidad++
        actualizarCantidadCarrito()
        actualizarResumen()
        actualizarResumenPrecios()

    }
    localStorage.setItem("productos", JSON.stringify(productosAgregados));
    aparecerCarrito()
}

function actualizarCantidadCarrito() {

    let numCarrito = document.querySelector(".carrito__cantidad")
    let numActualizado = productosAgregados.reduce((acc, valor) => acc + valor.cantidad, 0)
    numCarrito.innerText = numActualizado
}





function actualizarResumen() {
    let cantidadResumen = document.querySelector(".cantidad--productos")
    let cantidadResumenActualizada = productosAgregados.reduce((acc, cantidadpdto) => acc + cantidadpdto.cantidad, 0)
    cantidadResumen.innerText = cantidadResumenActualizada
}
let precioFinal = document.querySelector(".precio--final")
function actualizarResumenPrecios() {
    let resultado = []
    let cantidadResumenTotal = document.querySelector(".cantidad--precio")
    let totalesSumar = productosAgregados.map(pdto => {
        let resultado1 = pdto.cantidad * pdto.precio
        resultado.push(resultado1)
    })
    let precioTotalResumen = resultado.reduce((acc, precios) => acc + precios)
    let precioFormateado = precioTotalResumen.toLocaleString('es-ES', {
        minimumFractionDigits: 0
    });
    cantidadResumenTotal.innerText = "$ " + precioFormateado;
    precioFinal.innerText = "$ " + precioFormateado;
}


function mostrarResumen() {
    let resumenCompra = document.querySelector(".resumen__compra")
    if (productosAgregados && productosAgregados.length > 0) {
        resumenCompra.style.display = "block";
    } else {
        resumenCompra.style.display = "none";
    }

    localStorage.setItem("productos", JSON.stringify(productosAgregados));
}
mostrarResumen()

if (productosAgregados && productosAgregados.length > 0) {
    aparecerCarrito()
    actualizarResumenPrecios()
    actualizarCantidadCarrito()
    actualizarResumen()
    mostrarResumen()
} else {
    generalContainer.style.display = "none"
}



// =========================================NAVBARSSS=====================================================================

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





const menu = document.querySelector(".filtros")

const toggle = document.querySelector(".flecha")

toggle.addEventListener("click", () => {
    menu.classList.toggle("close")
})
// =========================================FIN NAVBARS=================================================================

// ====================================================== VENTANA MODAL EXITO ==========================================
document.querySelector(".final--compra").addEventListener("click", () => {
    Swal.fire({
        title: "Seguro que deseas finalizar la compra?",
        html: `¡No podrás revertirlo!<br>Total de la compra: ${precioFinal.innerHTML}`,
        icon: "warning",
        iconColor:"orange",
        showCancelButton: true,
        confirmButtonColor: "#008000",
        cancelButtonColor: "#d33",
        cancelButtonText:"Cancelar",
        confirmButtonText: "Finalizar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra realizada con exito!",
                text: "Esperamos encontrarnos nuevamente",
                icon: "success"
            });
            localStorage.removeItem("productos")
            productosAgregados.length = 0
            aparecerCarrito()
            actualizarCantidadCarrito()
        }
    });
})

/* <div class="carrito__producto">
                <div class="imagen__nombre__producto">
                    <div class="imagen__nombre__producto--img">
                        <img src="img/Lampara Nebulosa.jpg" title="" alt="">
                    </div>
                    <div class="imagen__nombre__producto--txt">
                        <span>NOMBRE PRODUCTO</span>
                    </div>
                </div>
                <div class="cantidad__producto">
                    <p>cantidad: <span>0</span></p>
                </div>
                <div class="iconos___producto">
                    <div class="suma">
                        <button class="cart__button">
                            <span class="effect"> </span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="dlte">
                        <button class="cart__button">
                            <span class="effect"> </span>
                            <i class="fa-solid fa-trash-can"></i>
                        </button>

                    </div>
                    <div class="resta">
                        <button class="cart__button">
                            <span class="effect"> </span>
                            <i class="fa-solid fa-minus"></i>
                        </button>

                    </div>
                </div>
            </div>*/