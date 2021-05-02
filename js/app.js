
//Captura de elementos HTML por medio de su id utilizando el método getElementById y los guardé en una variable.

let humildad = document.getElementById('humilde');
let fantoche = document.getElementById('fantoche');
let seasmamon = document.getElementById('seasmamon');

//Los oculté modificando su estilo 
humildad.style.visibility="hidden";
fantoche.style.visibility="hidden";
seasmamon.style.visibility="hidden";

//la variable "status" permitirá elegir qué elemento mostrar según lo que el usuario ingrese al prompt 
status = prompt("Si eres humilde escribe: Humilde , o si eres fantoche escribe: Fantoche; un meme te describirá" )

//se convierte el string resultante del prompt de status a mayúsculas para poder ser evaluadas en los condicionales
status = status.toLocaleUpperCase();

//En el primer if si el usuario ingresa la palabra humilde, sin importar mayúsculas o minúsculas ejecuta las instrucciones de adentro 
//Da visibilidad a humildad, y mantiene ocultos fantoche y seasmamon; finalmente espera 8 seg y recarga la página.
if (status == "HUMILDE" && status != ""){
    humildad.style.visibility="visible";
    fantoche.style.visibility="hidden";
    seasmamon.style.visibility="hidden";
    setTimeout(() => { location.reload(); }, 8000);

//En el else if si el usuario ingresa la palabra fantoche, sin importar mayúsculas o minúsculas ejecuta las instrucciones de adentro 
//Da visibilidad a fantoche, y mantiene ocultos humildad y seasmamon; finalmente espera 8 seg y recarga la página.
}else if (status == "FANTOCHE" && status != ""){
    humildad.style.visibility="hidden";
    fantoche.style.visibility="visible";
    seasmamon.style.visibility="hidden";
    setTimeout(() => { location.reload(); }, 8000);

}
//En el else si el usuario no sigue las instrucciones, ejecuta las instrucciones de adentro 
//Da visibilidad a seasmamon, y mantiene ocultos humildad y fantoche; finalmente espera 8 seg y recarga la página.
else {
    humildad.style.visibility="hidden";
    fantoche.style.visibility="hidden";
    seasmamon.style.visibility="visible";
    setTimeout(() => { location.reload(); }, 8000);
}




