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

let stock;
const principalGenerator = async () => {
    try {
        const response = await fetch("/stock.json")
        const data = await response.json()
        stock = data;
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
                boton.addEventListener("click", showToast)
            })
        }

        function showToast() {
            let container = document.querySelector(".toast__container");
            let div = document.createElement("div")
            div.classList.add("toast")

            div.innerHTML = `<svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                    fill-opacity="1"></path>
            </svg>
    
            <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="0" fill="currentColor"
                    stroke="currentColor" class="icon">
                    <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z">
                    </path>
                </svg>
            </div>
            <div class="message-text-container">
                <p class="message-text">Operación exitosa!</p>
                <p class="sub-text">Producto añadido al carrito</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" stroke-width="0" fill="none" stroke="currentColor"
                class="cross-icon">
                <path fill="currentColor"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>`
            container.appendChild(div)

            const modals = div.querySelector(".cross-icon")
            modals.addEventListener("click", () => {
                div.remove()
            })
            setTimeout(() => {
                div.remove()
            }, 3000)
        }

        const productosAgregadosStorage = JSON.parse(localStorage.getItem("productos"))
        let productosEnCarrito
        if (productosAgregadosStorage) {
            productosEnCarrito = productosAgregadosStorage
            actualizarCantidadCarrito()
        } else {
            productosEnCarrito = []
        }


        function agregarAlCarrito(e) {
            const id = e.currentTarget.id;
            const pdtoAgregado = stock.find(elemento => elemento.nombre == id)
            if (productosEnCarrito.some(elemento => elemento.nombre == id)) {
                const index = productosEnCarrito.findIndex(elemento => elemento.nombre == id)
                productosEnCarrito[index].cantidad++;
            } else {
                pdtoAgregado.cantidad = 1;
                productosEnCarrito.push(pdtoAgregado)
            }
            actualizarCantidadCarrito()

            localStorage.setItem("productos", JSON.stringify(productosEnCarrito))
        }

        function actualizarCantidadCarrito() {
            let numCarrito = document.querySelector(".carrito__cantidad")
            let numActualizado = productosEnCarrito.reduce((acc, valor) => acc + valor.cantidad, 0)
            numCarrito.innerText = numActualizado
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
    } catch (err) {
        console.log(err)
    }
}

principalGenerator()
// fetch("/stock.json")
//     .then((response) => response.json())
//     .then((data) => {

//     })


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