let mensaje = "Hoy es viernes";

// como los strings son un tipo de dato iterable, quiere decir que podemos acceder a sus posiciones de forma independiente
// console.log(mensaje[1]);

// for (let i = 0; i < mensaje.length; i++) {
//     console.log(mensaje[i]);
// }

// // averiguar si un string empieza por una determinada subcadena
// console.log(mensaje.startsWith("hoy"))

// Muchas veces la información nos va a venir en un string muy largo. 
let movimientos = "400,-200,23,-11";
let movimientosArray = movimientos.split(",");
console.log(movimientosArray);

let total = 0;

for (let siguienteNumero of movimientosArray) {
    total = total + +siguienteNumero;
}

console.log(total);


// base de datos te viene todos los nombres de los michis de Progats separados por un espacio
let nombresGatos = "Bigotes Latitas Maullidos";

// console.log(nombresGatos.split(" "));