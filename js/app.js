document.write("CALCULADORA DE VELOCIDAD")
let distance= prompt("Ingresa al distancia recorrida en metros:");
let time= prompt("Ingresa el tiempo en el que recorriste dicha distancia en segundos:");; 
let ok = confirm("Estás seguro de los datos?")


let velocity = distance/time;

document.write("<br/><br/>La velocidad fué de: " + parseFloat(velocity) + " m/s");




