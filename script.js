/////////////////////////////////////// Ejercicio 1 ///////////////////////////////////////////////////
// let dia = prompt("Como esta el dia hoy?")
// console.log("El dia de hoy esta " + dia)

/////////////////////////////////////// Ejercicio 2 ///////////////////////////////////////////////////
// let num = prompt("indicar el radio")
// function area(radio) {
//     return Math.PI * radio ** 2
// }
// function perimetro(radio) {
//     return 2 * Math.PI * radio
// }
// console.log("El Area es: " + area(num))
// console.log("El perimetro es: " + perimetro(num))

/////////////////////////////////////// Ejercicio 3 ///////////////////////////////////////////////////
// let edad = prompt("indique su edad")
// if (edad >= 18) {
//     console.log("Ud es mayor, no vote a los KKs")
// } else {
//     console.log("Es menor, no haga cagadas")
// }

/////////////////////////////////////// Ejercicio 4 ///////////////////////////////////////////////////
// let letra = prompt("Ingrese una letra, solo puede ser N o S");
// letra = letra.toUpperCase()
// console.log(letra)
// if (letra == "N" || letra == "S") {
//     console.log("CORRECTO!")
// } else {
//     console.log("INCORRECTO")
// }

/////////////////////////////////////// Ejercicio 5 ///////////////////////////////////////////////////
// let opcion = prompt(`Elegir la operacion:
//     suma = s/S
//     resta = r/R
//     division = d/D
//     multiplicacion = m/M`)
// opcion = opcion.toLowerCase()

// let num = prompt("primer numero")
// let num2 = prompt("segundo numero")
// switch (opcion) {
//     case "s":
//         console.log("La suma es: " + (num + num2));
//         break;
//     case "r":
//         console.log("La resta es: " + (num - num2))
//         break;
//     case "m":
//         console.log("La multiplicacion es: " + (num * num2))
//         break;
//     case "d":
//         console.log("La division es: " + (num / num2))
//         break;
// }

/////////////////////////////////////// Ejercicio 6 ///////////////////////////////////////////////////
// let opcion = prompt("ingrese un numero")
// if (opcion == 0) {
//     console.log("el numero no es par ni impar")
// } else if (opcion % 2 == 0) {
//     console.log("el numero es par")
// } else {
//     console.log("el numero es impar")
// }

/////////////////////////////////////// Ejercicio 7 ///////////////////////////////////////////////////
// let limite = prompt("ingrese el limite a llegar")
// let num = 0
// do {

//     let opcion = prompt("ingrese un numero")
//     opcion = parseInt(opcion)
//     num = num + opcion
//     console.log(num)
// } while (num < limite)
// console.log("Se alcanzo el numero limite, sumando: " + num)


/////////////////////////////////////// Ejercicio 8 ///////////////////////////////////////////////////
// let contador = 0
// let suma = 0
// let max = 0
// let min = Number.MAX_VALUE
// let num = 0;

// do {
//     num = prompt("Ingrese un numero")

//     num = parseInt(num)

//     if (num != 0) {

//         if (num > max) {
//             max = num
//         }

//         if (num < min) {
//             min = num
//         }

//         contador += 1
//         suma += num

//     }

// } while (num != "0");

// console.log("minimo " + min)
// console.log("maximo " + max)
// console.log("contador " + contador)
// console.log("El promedio total es: " + (suma / contador))

/////////////////////////////////////// Ejercicio 9 ///////////////////////////////////////////////////
// let palabra = prompt("Ingrese una palabra")
// let resultado = ""
// for (let i = 0; i < palabra.length; i++) {
//     resultado += palabra.substring(i, (i + 1)) + " "
// }
// console.log(resultado)

/////////////////////////////////////// Ejercicio 10 ///////////////////////////////////////////////////
// let palabra = prompt("Ingrese una palabra")
// let resultado = ""
// for (let i = palabra.length - 1; i >= 0; i--) {
//     resultado += palabra.substring(i, i + 1)
// }
// console.log(resultado)

/////////////////////////////////////// Ejercicio 10.1 ///////////////////////////////////////////////////
// let palabra = prompt("Ingrese una palabra")
// palabra = palabra.split("").reverse()
// palabra = palabra.toString()
// console.log(palabra)

// Ejercicio 11
// var frase = prompt("Ingrese una frase");

// let fraseActual = "";
// let fraseMasLarga = "";

// for (let i = 0; i < frase.length; i++) {

//     fraseActual += frase.substring(i, (i + 1));

//     if (i == frase.length-1) {
//         fraseMasLarga = fraseActual;
//     }

//     if (frase.substring(i, (i + 1)) == " ") {
//         if (fraseActual.length > fraseMasLarga.length) {
//             fraseMasLarga = fraseActual;
//         }
//         fraseActual = "";
//     }

// }

// console.log(fraseMasLarga)

/////////////////////////////////////// Ejercicio 12 ///////////////////////////////////////////////////
// let func = (a) => typeof(a);

// console.log(func(1))

/////////////////////////////////////// Ejercicio 13 ///////////////////////////////////////////////////
// let persona = new Object();
// persona.nombre = "Alguien";
// persona.sexo = "-";

// let persona2 ={
//     nombre : "Steven",
//     edad : "45",
//     sexo : "algo",
//     peso : "90",
//     altura : "123",
// }

// console.log(persona)
// console.log(persona2)

/////////////////////////////////////// Ejercicio 14 ///////////////////////////////////////////////////
// function Libro(isbn, titulo, autor, paginas) {
//     this.isbn = isbn
//     this.titulo = titulo
//     this.autor = autor
//     this.paginas = paginas
// }
// isbn = prompt("Ingrese el isbn")
// titulo = prompt("Ingrese el titulo")
// autor = prompt("Ingrese el autor")
// paginas = prompt("Ingrese las paginas")

// libro = new Libro(isbn,titulo,autor,paginas);

// console.log(libro)

/////////////////////////////////////// Ejercicio 15 ///////////////////////////////////////////////////
// let area = (radio) => Math.PI * radio ** 2;
// let perimetro = (radio) => Math.PI * radio * 2;

// let radio = prompt("ingrese el radio")

// console.log("area =" + area(radio))
// console.log("perimetro =" + perimetro(radio))

/////////////////////////////////////// Ejercicio 16 ///////////////////////////////////////////////////
// let arreglo = new Array;
// let arreglo2 = []

// for (let i = 0; i < 5; i++) {
//     arreglo[i] = Math.round(Math.random()*100);
//     arreglo2[i] = Math.round(Math.random()*100);
// }

// console.log(arreglo)
// console.log(arreglo2)

/////////////////////////////////////// Ejercicio 17 ///////////////////////////////////////////////////
// let arreglo = new Array;

// for (let i = 0; i < 10; i++) {
//     arreglo[i] = Math.round(Math.random()*100);
// }
// console.log(arreglo)
// arreglo.splice(arreglo.length-2,arreglo.length);
// console.log(arreglo)


/////////////////////////////////////// Ejercicio 18 ///////////////////////////////////////////////////

// var valores = [true, 5, false, "hola", "adios", 2]

// if (valores[3].length > valores[4].length) {
//     console.log("El valor mas alto es hola")
// } else {
//     console.log("El valor mas alto es adios")
// }

// for (let i = 0; i < valores.length; i++) {
//     if (typeof (valores[i]) == "boolean") {
//         console.log(valores[i])
//     }
// }

// let a = valores[1]
// let b = valores[5]

// function funcion(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
// }

// funcion(a,b);


/////////////////////////////////////// Ejercicio 19 ///////////////////////////////////////////////////

// let arreglo = new Array();
// let arreglo2 = [];

// for (let i = 0; i < 50; i++) {
//     arreglo[i] = Math.round(Math.random() * 100);
// }

// for (let i = 0; i < 20; i++) {
//     arreglo2[i] = Math.round(Math.random() * 100);
// }

// console.log(arreglo)
// arreglo.sort();

// for (let i = 0; i < 10; i++) {
//     arreglo2[i] = arreglo[i];
//     // arreglo2.push(arreglo[i]);
// }

// for (let i = 10; i < arreglo2.length; i++) {
//     arreglo2[i] = 0.5;
// }

// console.log(arreglo2)


/////////////////////////////////////// Ejercicio 20 ///////////////////////////////////////////////////

// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1.map(function (x) {
//     return [x * 3];
// });

// console.log(arr2)

// arr3 = arr2.flat().map(function (x) {
//     return x + 3;
// });

// console.log(arr3)

/////////////////////////////////////// Ejercicio 21 ///////////////////////////////////////////////////

// let Persona = {
//     nombre: "Steven",
//     edad: "45",
//     sexo: ["H","M","O"],
//     peso: "90",
//     altura: "123",
// }

// console.log(Object.values(Persona));
// output: Array ["Steven", 45, Array ["H","M","O"], "90", "123"]

// const str = JSON.stringify(Persona)
// console.log(str)

/////////////////////////////////////// Ejercicio 22 ///////////////////////////////////////////////////

function hacerClick() {
    alert("Gracias por compartir tus contraseñas!")
    alert("Muajajaja")
}

document.getElementById("click").onclick = hacerClick;

/////////////////////////////////////// Ejercicio 23 ///////////////////////////////////////////////////

const paragraph = document.getElementById("texto");

let words = paragraph.textContent.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
        words[i] = "<span>" + words[i] + "</span>"; //Tambien se puede realizar con </mark>
    }
};

paragraph.innerHTML = words.join(" ");

/////////////////////////////////////// Ejercicio 24 ///////////////////////////////////////////////////


function calcularRadio() {

    let radio = (parseInt(document.getElementById("diametro").value)) / 2;

    let resultado = document.getElementById("resultadoRadio");

    radio = document.createTextNode(radio)
    resultado.innerHTML = radio.textContent
}

document.getElementById("ingresoDiametro").onclick = calcularRadio;

/////////////////////////////////////// Ejercicio 25 ///////////////////////////////////////////////////


function getFormValores() {

    let nombre = document.getElementById("form1").elements["nombre"].value;
    let apellido = document.getElementById("form1").elements["apellido"].value;
    document.getElementById("imprimirNombre").innerHTML = nombre;
    // let impresion = document.getElementById("imprimirNombre");

    // nombre = document.createTextNode(nombre)
    // impresion.innerHTML = nombre.textContent

}

document.getElementById("form1").addEventListener("submit",function(event){
    event.preventDefault();
})







