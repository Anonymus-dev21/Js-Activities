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

// ====================================VALIDACION FORMULARIO=============================================================
const inputs = document.querySelectorAll(".input__form")
const formulario = document.getElementById("form__contacto")
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validaciones = {

    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampos(expresiones.nombre, e.target, "nombre", "msj__error-nombre")

            break;
        case "correo":
            validarCampos(expresiones.correo, e.target, "correo", "msj__error-correo")
            break;
        case "telefono":
            
            validarCampos(expresiones.telefono, e.target, "telefono", "msj__error-telefono")
            break;
        case "msj":

            let pregunta = document.getElementById("msj");
            const mensajeError = document.getElementById("msj__error-area");

            if (pregunta.value.length > 10) {
                if (pregunta.classList.contains("incorrecto")) {
                    pregunta.classList.remove("incorrecto");
                    mensajeError.style.display = "none";
                    validaciones.mensaje = true
                }
            } else {
                pregunta.classList.add("incorrecto");
                mensajeError.style.display = "block";
                validaciones.mensaje = false
            }
            break;
    }

}

function validarCampos(expresion, input, id, id2) {
    const pregunta = document.getElementById(id)
    const ids = document.getElementById(id2)
    if (expresion.test(input.value)) {



        if (pregunta.classList.contains("incorrecto")) {
            ids.style.display = "none"
            pregunta.classList.remove("incorrecto")
        }
        validaciones[id] = true;

    } else {
        document.getElementById(id).classList.add("incorrecto")
        ids.style.display = "block"
        validaciones[id] = false;
    }
}



inputs.forEach((input) => {
    input.addEventListener("keyup", validarForm)
    input.addEventListener("blur", validarForm);
})



const containerError = document.getElementById("error__msj")
containerError.style.display="none"


formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    if (validaciones.correo && validaciones.telefono && validaciones.nombre && validaciones.mensaje) {

        
        if (containerError.style.display == "flex") {
            containerError.style.display = "none"
        }

        formulario.reset()
        Swal.fire({
            title: "Formulario enviado exitosamente!",
            icon: "success",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
            }
        });
    } else {
        containerError.style.display = "flex"
    }
})