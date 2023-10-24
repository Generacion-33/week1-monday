/**
 * Que es una variable
 * Una variable es un espacio de memoria, donde se alamacena un valor o una referencia.
 */


/**
 * REGLAS GENERALES
 *
 * Usar var, let const -> para poder declarar una variable
 * No puede comenzar con las palabras reservadas
 * ❌ No puede comenzar por un numero
 * ❌ No puede comenzar por un espacio
 * ❌ No puede comenzar por caracteres especiales (*, %, +,-,/)
 * ✅  si puede comenzar con : $ _
 * ✅ _miVariable _4variable
 * ✅ puedo comenzar mi variable con cualquier letra, let firstVariable
 * ✅ camelCase:-> let variableDeMuchasPalabras -> notacion camelCase
 */

/**
 * DECLARACION
 * ASIGNACION
 * REDECLARACION
 * REASIGANACION
 */

//VAR. Puedo declarar, puedo asignar y puedo reasignar y puedo redecalrar
//Declaracion
var nombre //declaracion
nombre = 'Camilo' //asignacion
var apellido = 'sanchez' //declaracion y asignacion
nombre = 'Carlos' //resignacion
console.log(nombre);//'Carlos'
//redeclaracion
var nombre = 'Lucas' //redaclaracion, es totalmente nevagativo ❌❌❌❌❌❌
console.log(nombre);



//LET. Se puede declarar, se puede asignar y se puede reasignar. Let no me permite redeclarar ✅✅✅✅✅✅✅
//Declaracion con let
let nombre2 //declaracion
nombre2 = 'Dana' //asignacion
let apellido2 = 'Daza' // declaracion y asignacion
apellido2 = 'castillo' //reasignacion
console.log(apellido2); //castillo
//let apellido2 = 'Cotera'



//CONST. No permite poder declarar sin asignar. Con const debo declarar y asignar en la misma linea, a diferencia con let y var. Y tampoco me deja cambiar el valor de la misma, es decir que no me deja reasignar. Tampoco me dejara redeclarar
//Declaracion con const
const nombre3 = 'Martha'
console.log(nombre3) //'Martha'
//nombre3 = 'Roberto' // No se puede reasignar una constante
//console.log(nombre3);