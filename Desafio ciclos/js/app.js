//Creación de variables pertinentes
let inp = document.getElementById('NP'); //variable para capturar el número de personas
let np; //número de personas
let valueTem=document.getElementById("template"); //Variable del div template para imprimir los inputs
let acc=0; //acumulador


//Evento que se ejecuta cuando se sale del input
inp.addEventListener("focusout", () =>{ 

    np=inp.value; //Asignación de valor a np extrayendolo del valor ingresado al input inp
    valueTem.innerHTML=""; //Limpio el template para no duplicar lo que ya está creado en el documento


    //Ciclo for para la creación e impresión de los div, labels e inputs necesarios
    for (let i = 0; i < np; i++) {

        //Variables para crear elementos hijos del template Valuetemp
        let input = document.createElement("input");
        let label = document.createElement("label");
        let div = document.createElement("div");

        //Asignación de clases de bootstrap a los elementos hijos
        label.className="form-label";
        input.className="form-control";
        div.className= "mb-3";
        label.innerText=`Ingrese la estatura de la persona número ${i+1} en cm:`;

        //Creación de elementos hijo de los div mb-3
        div.appendChild(label);
        div.appendChild(input);

        //Evento para acumular en acumulador la suma de las estaturas
        input.addEventListener("focusout", () => {
            acc+= parseInt(input.value);
        })

        //Creación de elemento hijo div a valueTem
        valueTem.appendChild(div);     
    }

    //Evento onclick que calcula el promedio y lo imprime en el documento usando el template show
    document.getElementById("save").onclick= () => {
        let res = acc/np;
        document.getElementById("show").innerText = `El promedio de estatura es: ${res} cm`;   
    }

    //Evento onclick para borrar todos los datos y limpiar templates e inputs
    document.getElementById("recargar").onclick= () => {
        acc=0;
        np=0;
        valueTem.innerHTML="";
        document.getElementById("show").innerText ="";
        inp.value="";
    }


})


