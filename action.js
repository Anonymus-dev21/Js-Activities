// alert("Bienvenido a la sumadora de 2 números")
// let primerNumero = parseInt(prompt("Ingrese el primer número para a sumar"))
// let segundoNumero = parseInt(prompt("Ingrese el segundo número para a sumar"))
// alert(primerNumero + segundoNumero)
// console.log(`La suma de ${primerNumero} + ${segundoNumero} es igual a ${primerNumero + segundoNumero}`)

// let edad= prompt("Cual es tu edad?");
// let nombre= prompt("Cual es tu nombre");
// let saludo= `Hola ${nombre}!!, entiendo que tenes ${edad} años.`;
// alert(saludo);

// let ingreseUnNumero= parseFloat(prompt("ingrese un número"));
// let diferencia= (ingreseUnNumero - 1000)
// if (ingreseUnNumero > 1000) {
//     alert(`Tu numeero es ${ingreseUnNumero} y es mayor a 1000 por una diferencia de ${diferencia}`)
// } else {
//     alert("Tu número es menor a 1000");
// }

// let numero = parseFloat(prompt("ingrese un número entre 10 y 50:"));
// if ( isNaN(numero)) {
//     alert ("Lo que ingresaste no es un número")
// } else if ((numero < 10) || (numero > 50)){
//         alert("tu numero no esta en el rango")
//     } else {
//         alert("tu número esta en rango")
//     }

// console.log(numero)
// let num1 = Number(prompt("Primer número"))
// let num2 = Number(prompt("cuantas veces multiplicas al número"))
// let resultado= 0;
// let contador = 1;

// while (contador <= num2) {
//     resultado += num1
//     contador += 1
// }


// alert(resultado)

//FACTORIAL DE UN NÚMERO

// let numFactorial = parseFloat(prompt("Numero que va a sacar el factorial"))
// let numExtra= numFactorial


// const facotorializar = () => {
//     while (numFactorial > 1) {
//         numFactorial -= 1
//         let resultado= numExtra *= numFactorial
//         console.log(numFactorial)
//         console.log(resultado)
//     }

// }
// facotorializar()

//Simulador de sistema de adopción:

// let animal = ``
// let perros = ``
// let gatos = ``
// let hamster = ``
// let loros = ``
// let compraFinal = ``
// let confirmacion = false
// let animalesAdoptados= []



// const adoptarUnAnimal = () => {
//     while (nombre) {
//             confirmacion = confirm(`Deseas adoptar algun animal?`)
//             while (confirmacion) {
//                 animal = prompt("Deseas adoptar un perro, un gato, un loro o un hamster?")
//                 if (animal || animal.toLowerCase == "si") {
//                     if (animal.toLowerCase().includes("perro")) {
//                         perros = prompt("Tienes 3 opciones: Un pitbull llamado Thor, luna (un akita inu) o un perrito callejero llamado pancho")
//                         animalesAdoptados.push(perros)
//                         compraFinal = alert(`Felicitaciones, has adoptado a: ${perros}!!`)
//                         confirmacion = confirm(`Deseas adoptar algun otro animal?`)
//                     } else if (animal.toLowerCase().includes("gato")) {
//                         gatos = prompt("Tienes 2 opciones: Un gatito llamado Tom o una gatita llamada Luly")
//                         animalesAdoptados.push(gatos)
//                         compraFinal = alert(`Felicitaciones, has adoptado a: ${gatos}!!`)
//                         confirmacion = confirm(`Deseas adoptar algun otro animal?`)
//                     } else if (animal.toLowerCase().includes("loro")) {
//                         loros = prompt("Tienes 3 opciones: Un lorito llamado Verdito, otro llamado Pepe, y el último Juancito (el mas sumiso y silencioso)")
//                         compraFinal = alert(`Felicitaciones, has adoptado a: ${loros}!!`)
//                         animalesAdoptados.push(loros)
//                         confirmacion = confirm(`Deseas adoptar algun otro animal?`)
//                     } else if (animal.toLowerCase().includes("hamster")) {
//                         hamster = prompt("Tienes 2 opciones: Un hamster llamado pielcita o una hembra llamada Nicky")
//                         compraFinal = alert(`Felicitaciones, has adoptado a: ${hamster}!!`)
//                         animalesAdoptados.push(hamster)
//                         confirmacion = confirm(`Deseas adoptar algun otro animal?`)
//                     } else {
//                     alert("Selecciona un animal valido")
//                     animal="si"
//                     }
//                 } else {
//                     alert("sentimos mucho que no hayas querido adoptar ningún animalito :( nos vemos!")
//                     break
//                 }
//             }
//         if (animal) {
//             alert(`Gracias por la adopción ${nombre}, espero que te lleves bien con ${animalesAdoptados.join(", ")} y que tengas un hermoso día!`)
//         }
//         return compraFinal
//     }
// }
// const validarNya = (nombre) => {

//     if (nombre.length < 3 || nombre == "") {
//         while (nombre.length < 3 || nombre == "") {
//             nombre = prompt("Ingresa un nombre y apellido con 3 o mas carácteres")
//     return nombre
// }

// let nombre = prompt("Hola, estamos encantados de tenerte aquí, podrías decirnos tu nombre y apellido?")
// if (nombre || nombre == ""){
//     nombre = validarNya(nombre)
// }

// adoptarUnAnimal()
// console.log(animalesAdoptados)

//E-COMERCE DE Proyectoeres de Galaxias, estrellas y Auroras boreales, luces led etc.

const stock = [{
        titulo: "Suono Home Proyector Luz Noche Láser",
        nombre: "Proyector Auroras boreales",
        tipo: "proyector",
        precio: 20000,
        img: "img/proyector 1.jpg",
        descripción: " Tiene mas de 10 modos de iluminación distintos y lasers que simulan estrellas. Proyectan una simulación de auroras boreales hermosa.",
        color: "Rojo, verde, Blanco, Azul y las distintas combinaciónes entre ellos",
    },
    {
        titulo: "Proyector De Estrellas Giratorio Color de la estructura Rosa",
        nombre: "Proyector Estrellas",
        tipo: "proyector",
        precio: 15000,
        img: "img/proyector estrellas.jpg",
        descripción: " Velador principalmente mas infantil",
        color: "Estrellas infantiles violetas, azules, blancas y rojas y algunas combinaciones de ellos.",
    },
    {
        titulo: "Proyector Astronauta Galaxy Flat Lampara 360°",
        nombre: "Proyector Galaxia",
        precio: 15000,
        img: "img/proyector Astronauta.jpg",
        tipo: "proyector",
        descripción: " El proyector aurora genera nebulosas coloridas e impredecibles, con brillo de 5 niveles y 8 colores nebulosos, proporcionando una experiencia similar a estar en una gran galaxia.",
        color: "Multicolor",

    },
    {
        id: 1,
        titulo: "Lampra de auroras boreales",
        nombre: "Lampara nebulosa.",
        precio: 37500,
        img: "img/Lampara Nebulosa.jpg",
        tipo: "lampara",
        descripción: " posee un vidrio ondulado y una luz en el interior que se le puede ir cambiando el color, reflejando asi perfectamente unas nebulosas o auroras boreales. Posee un efecto muy suave",
        color: "Rojo, Azul y Verde"
    },
    {
        titulo: "Tiras LED",
        nombre: "Cinta led",
        tipo: "LED",
        precio: 5500,
        img: "img/Tiras Led.webp",
        descripción: " cinta led multicolor de aproximadamente 5mts para adornar cualquier mueble o habitación",
        color: "multicolor"
    },
    {
        titulo: "Foco Led",
        nombre: "Bombilla LED",
        tipo: "LED",
        precio: 7500,
        img: "img/Foco Led.jpg",
        descripción: " Un foco que le podes cambiar a distintos colores estáticos",
        color: "multicolor"
    }
];

const cardsContainer = document.querySelector(".card__container");
const filterButtons = document.querySelectorAll(".filer__links")
let botonCarrito = document.querySelectorAll(".cart__button")

function mostrarProductos(stock) {
    cardsContainer.innerHTML = '';
    stock.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("cards")

        div.innerHTML = ` 
        <div class="card__img">
        <img src="${producto.img}">
    </div>
    <div class="card__title">
        <span> ${producto.titulo}</span>
    </div>
    
    <div class="card__description">
        <p> ${producto.descripción}</p>
    </div>
    <div class="card__price__and__carrito">
        <div class="price">
            <p>${"$" + producto.precio}</p>
        </div> 
        <div class="add__carrito">
        <button class="cart__button" id="${producto.nombre}">
            <span class="effect"> </span>
            <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>
        
        
    </div>`
        cardsContainer.appendChild(div)
    })
    actualizarBotonCarrito()
    console.log(botonCarrito)
}
mostrarProductos(stock)

filterButtons.forEach(botones => {
    botones.addEventListener("click", (e) => {

        filterButtons.forEach(botones => botones.classList.remove("active"));
        e.currentTarget.classList.add("active")


        if (e.currentTarget.id !== "todos") {
            const filtroBotones = stock.filter(categoria => categoria.tipo === e.currentTarget.id)

            mostrarProductos(filtroBotones)
        } else {
            mostrarProductos(stock)
        }
    })
})


const menu = document.querySelector(".filtros")

const toggle = document.querySelector(".flecha")

toggle.addEventListener("click", () => {
    menu.classList.toggle("close")
})

// ==============================CARRITO===================================
function actualizarBotonCarrito() {
    botonCarrito = document.querySelectorAll(".cart__button")
    botonCarrito.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}
const productosAgregadosStorage = JSON.parse(localStorage.getItem("productos"))
let productosEnCarrito
if (productosAgregadosStorage){
    productosEnCarrito = productosAgregadosStorage
    actualizarCantidadCarrito()
} else{
    productosEnCarrito = []
}


function agregarAlCarrito(e) {
    const id = e.currentTarget.id;
    const pdtoAgregado = stock.find(elemento => elemento.nombre == id)
    if(productosEnCarrito.some(elemento => elemento.nombre == id)){
        const index = productosEnCarrito.findIndex(elemento => elemento.nombre == id)
        productosEnCarrito[index].cantidad++;
    } else{
        pdtoAgregado.cantidad = 1;
        productosEnCarrito.push(pdtoAgregado)
    }
    actualizarCantidadCarrito()
    
    localStorage.setItem("productos", JSON.stringify(productosEnCarrito))
}

function actualizarCantidadCarrito () {
    let numCarrito = document.querySelector(".carrito__cantidad")
    let numActualizado =productosEnCarrito.reduce((acc, valor) => acc + valor.cantidad, 0)
    numCarrito.innerText = numActualizado
    }


/* <div class="cards">
                <div class="card__img">
                    <img src="img/logo galaxy shop.jpg">
                </div>
                <div class="card__title">
                    <span> PRODUCTO RANDOM</span>
                </div>

                <div class="card__description">
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo labore reiciendis soluta, blanditiis inventore necessitatibus at quam ipsa dolorum possimus iste neque, quos repudiandae eligendi, odit libero praesentium est magni.</p>
                </div>
                <div class="card__price__and__carrito">
                    <div class="price">
                        <p>$9500</p>
                    </div> 
                    <div class="add__carrito">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                    
                </div>
                
            </div>} */


// let confirmar = false;
// let precioTotal = 0;
// let precioCompraFinal = 0;
// let catalogo = "Te podemos ofrecer: \n"
// stock.forEach(propiedad => {
//     catalogo += propiedad.nombre + ":" + propiedad.descripción + ". Vale " + propiedad.precio + "$" + "\n \n";
// }) //MUESTRO LAS OPCIONES
// // console.log(catalogo)
// let productoSeleccionar = ""
// let cantidadProductos = 0;

// const productosAgregados = []
// const productos = stock.map((nmbre) => {
//     return {
//         nombre: nmbre.nombre.toLowerCase(),
//         precio: nmbre.precio,
//     }

// })
// console.log(productos)



// const validarNmro = (cantidad) => {
//     while (Number.isNaN(cantidad) || cantidad === 0) {
//         if (cantidad !== 0) {
//             alert("Debe agregar un número")
//         } else {
//             alert("Debe agregar un número distinto a 0")
//         }
//         cantidad = Number(prompt("¿Cuántos querés comprar?"));
//     }
//     return cantidad;
// }



// const validarNya = (nombre) => {
//     if (nombre || nombre == "") {
//         if (nombre.length < 3 || nombre == "") {
//             while (nombre.length < 3 || nombre == "") {
//                 nombre = prompt("Ingresa un nombre y apellido con 3 o mas carácteres")
//             }
//         }
//     }
//     return nombre
// }

// let nombre = prompt("Hola como estas, antes de comenzar queremos saber tu nombre! Cual es?")
// if (nombre || nombre == "") {
//     nombre = validarNya(nombre)
// }
// if (nombre) {
//     confirmar = confirm(`Hola devuelta ${nombre} deseas comprar algo?`)
//     if (confirmar) {
//         do {
//             alert(`Estos son los productos disponibles \n \n ${catalogo}`)
//             productoSeleccionar = prompt(`Cual desea comprar?`)
//             const productoEncontrado = productos.find((nme) => nme.nombre.includes(productoSeleccionar.toLowerCase()));
//             console.log(productoEncontrado)

//             if (productoEncontrado) {
//                 let confirmacionCompra = confirm(`Seguro deseas comprar ${productoSeleccionar.toLowerCase()}?`)
//                 if (confirmacionCompra) {

//                     cantidadProductos = Number(prompt(`Cuantos ${productoSeleccionar.toLowerCase()} desea comprar?`))
//                     var validarCantidad = validarNmro(cantidadProductos)
//                     precioTotal = productoEncontrado.precio * validarCantidad;
//                     const nuevoProducto = {
//                         nombre: productoEncontrado.nombre,
//                         precioTotal: precioTotal,
//                         cantidad: validarCantidad,
//                     }
//                     productosAgregados.push(nuevoProducto)
//                     console.log(productosAgregados)
//                 }

//             } else {
//                 alert("El producto ingresado no esta disponible o es incorrecto!")
//             }
//             volverAComprar = confirm("Desea agregar otro producto?")
//         } while (volverAComprar)
//     }
//     const eliminarProducto = (index) => {
//         if (index >= 0 && index < productosAgregados.length) {
//             productosAgregados.splice(index, 1);
//             return true;
//         } else {
//             return false;
//         }
//     };

//     let listaDeProductos = "Productos en tu carrito:\n";
//     productosAgregados.forEach((pdto, index) => {
//         listaDeProductos += `${index + 1}. ${pdto.nombre} - $${pdto.precioTotal}\n`;
//     });
//     alert(listaDeProductos);

//     let eliminarObjeto = confirm("¿Desea eliminar algún producto?");
//     if (eliminarObjeto) {
//         let objetoEliminado = prompt("Ingrese el número del producto que desea eliminar:");
//         let indexProductoAEliminar = parseInt(objetoEliminado) - 1;

//         let objetoEliminadoValidado = eliminarProducto(indexProductoAEliminar);
//         if (objetoEliminadoValidado) {
//             alert("¡El producto ha sido eliminado exitosamente!");
//         } else {
//             alert("El producto ingresado no está en la lista.");
//         }
//         let resumenDeCompra = confirm("Desea finalizar su compra?");
//         if (resumenDeCompra) {
//             precioCompraFinal = productosAgregados.reduce((iteracciones, finalPrice) => {
//                 return iteracciones + finalPrice.precioTotal
//             }, 0)

//             let resumen = "Resumen de tu compra:\n";
//             productosAgregados.forEach((pdto) => {
//                 resumen += `${pdto.nombre} - Cantidad: ${pdto.cantidad} - Precio total: $${pdto.precioTotal}. \n`;

//             })
//             alert(resumen)

//             alert(`Tu compra final es de: $${precioCompraFinal}`)

//             alert("Muchísimas gracias por su compra, disfrute sus productos!")
//         } else {
//             alert("Que lastima, esperamos ansioso su regreso! Que tenga Buen día.")
//         }
//     }
// } else {
//     alert("lo sentimos, que tenga un buen día!")
// }