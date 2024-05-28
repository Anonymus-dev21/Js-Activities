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

let animal = ``
let perros = ``
let gatos = ``
let hamster = ``
let loros = ``
let compraFinal = ``
let confirmacion = false
let animalesAdoptados= []



const adoptarUnAnimal = () => {
    while (nombre) {
            confirmacion = confirm(`Deseas adoptar algun animal?`)
            while (confirmacion) {
                animal = prompt("Deseas adoptar un perro, un gato, un loro o un hamster?")
                if (animal || animal.toLowerCase == "si") {
                    if (animal.toLowerCase().includes("perro")) {
                        perros = prompt("Tienes 3 opciones: Un pitbull llamado Thor, luna (un akita inu) o un perrito callejero llamado pancho")
                        animalesAdoptados.push(perros)
                        compraFinal = alert(`Felicitaciones, has adoptado a: ${perros}!!`)
                        confirmacion = confirm(`Deseas adoptar algun otro animal?`)
                    } else if (animal.toLowerCase().includes("gato")) {
                        gatos = prompt("Tienes 2 opciones: Un gatito llamado Tom o una gatita llamada Luly")
                        animalesAdoptados.push(gatos)
                        compraFinal = alert(`Felicitaciones, has adoptado a: ${gatos}!!`)
                        confirmacion = confirm(`Deseas adoptar algun otro animal?`)
                    } else if (animal.toLowerCase().includes("loro")) {
                        loros = prompt("Tienes 3 opciones: Un lorito llamado Verdito, otro llamado Pepe, y el último Juancito (el mas sumiso y silencioso)")
                        compraFinal = alert(`Felicitaciones, has adoptado a: ${loros}!!`)
                        animalesAdoptados.push(loros)
                        confirmacion = confirm(`Deseas adoptar algun otro animal?`)
                    } else if (animal.toLowerCase().includes("hamster")) {
                        hamster = prompt("Tienes 2 opciones: Un hamster llamado pielcita o una hembra llamada Nicky")
                        compraFinal = alert(`Felicitaciones, has adoptado a: ${hamster}!!`)
                        animalesAdoptados.push(hamster)
                        confirmacion = confirm(`Deseas adoptar algun otro animal?`)
                    } else {
                    alert("Selecciona un animal valido")
                    animal="si"
                    }
                } else {
                    alert("sentimos mucho que no hayas querido adoptar ningún animalito :( nos vemos!")
                    break
                }
            }
        if (animal) {
            alert(`Gracias por la adopción ${nombre}, espero que te lleves bien con ${animalesAdoptados.join(", ")} y que tengas un hermoso día!`)
        }
        return compraFinal
    }
}
const validarNya = (nombre) => {

    if (nombre.length < 3 || nombre == "") {
        while (nombre.length < 3 || nombre == "") {
            nombre = prompt("Ingresa un nombre y apellido con 3 o mas carácteres")
            if (nombre) {

            }
        }
    }
    return nombre
}



let nombre = prompt("Hola, estamos encantados de tenerte aquí, podrías decirnos tu nombre y apellido?")
if (nombre || nombre == ""){
    nombre = validarNya(nombre)
}


adoptarUnAnimal()
console.log(animalesAdoptados)