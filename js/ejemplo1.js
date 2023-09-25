/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Maria R. F.
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

let numeroNombres = 10;

var nombres = [];

function pintarNombres(num, nombres){
    for(let i = 0; i<num; i++){
        let nombre = prompt("Escribe un nombre");
        nombres[i] = nombre;
    }
    return nombres;
}

let resultado = pintarNombres(numeroNombres, nombres);
console.log(resultado);
alert(resultado);

/* AVISOS (WARNING) */
console.warn("warning");
/* ERRORES */
console.error("error");
/* INFORMACIÓN (LOG) */
console.log("Mensaje log");
/* DEPURACIÓN (DEBUG) */
console.debug("Mensaje deb");