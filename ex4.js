// [Dificil]: Hay un error en este bucle. Cambía SOLAMENTE una línea para conseguir que el bucle funcione. Debería aparecer un mensaje por consola: "arepa contiene la letra p". PISTA. Usa tantos console.log como necesites para saber qué pasa dentro del bucle. Pista: haz un console.log de palabraSecreta[i] al inicio del bucle.

let encontrado = false;
let letraBuscada = "q";
let palabraSecreta = "arepa";
let i = 0;

while (!encontrado && i < palabraSecreta.length) {
   
    encontrado = (palabraSecreta[i] == letraBuscada)
    i++; 
    console.log(encontrado);
}

if (encontrado) {
    console.log(`${palabraSecreta} contiene la letra ${letraBuscada}`);
}

else {
    console.log(`${palabraSecreta} NO contiene la letra ${letraBuscada}`);
}