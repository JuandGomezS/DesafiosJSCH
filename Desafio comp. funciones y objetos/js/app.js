//Declaración de variables pertinentes

let c1 = document.getElementById('c-pro1'); 
let c2 = document.getElementById('c-pro2'); 
let c3 = document.getElementById('c-pro3'); 
let t1=0;
let t2=0;
let t3=0;


//Clase para construir los objetos
class Producto {
    constructor(nombre, precio, iva) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.iva = parseFloat(iva);
    }

    //funcion para calcular el precio al aumentar el iva
    sumaIva() {
        this.precio = this.precio * (1 + (this.iva/100));
    }
}

//Definición de los objetos "Productox"
const producto1 = new Producto("memoria ram 16Gb ddr4", "350000","19");
const producto2 = new Producto("monitor fhd ips 24pg 144hz", "1200000", "0");
const producto3 = new Producto("teclado mecánico ISO", "190000", "16");

//Evento para cargar datos de los productos en la tabla
document.getElementById("charge").onclick= () => {
    document.getElementById("pro1").innerText = producto1.nombre;
    document.getElementById("pro2").innerText = producto2.nombre;  
    document.getElementById("pro3").innerText = producto3.nombre; 
    
    document.getElementById("iva1").innerText = producto1.iva;
    document.getElementById("iva2").innerText = producto2.iva;  
    document.getElementById("iva3").innerText = producto3.iva;

    document.getElementById("vl-un1").innerText = `$ ${producto1.precio}`;
    document.getElementById("vl-un2").innerText = `$ ${producto2.precio}`;  
    document.getElementById("vl-un3").innerText = `$ ${producto3.precio}`;
}

//FUNCIONES RELACIONADAS

//Primer función para determinar el valor parcial por producto
const valorParcial = (cantidad, precio)=>{
    return Math.ceil(precio)*cantidad;
}

//Segunda función para determinar el valor total de la suma de todos los productos
const valorTotal = (precio1,precio2,precio3)=>{
    return precio1+precio2+precio3;
}

//Funcion que imprime la suma de todos los productos
const mostrarTotal= (valorTotal)=>{
    document.getElementById("totalt").innerText = `$ ${valorTotal}`;
}




//Evento focusout para calcular el precio con iva del producto, multiplicarlo por la cantidad y mostrarlo en la tabla
c1.addEventListener("focusout", () =>{ 
    producto1.sumaIva();
    let can1 = c1.value;
    t1 = valorParcial(can1,producto1.precio);
    document.getElementById("vt1").innerText = `$ ${t1}`;
});

//Evento focusout para calcular el precio con iva del producto, multiplicarlo por la cantidad y mostrarlo en la tabla
c2.addEventListener("focusout", () =>{ 
    producto2.sumaIva();
    let can2 = c2.value;
    t2 = valorParcial(can2,producto2.precio);
    document.getElementById("vt2").innerText = `$ ${t2}`;
});

//Evento focusout para calcular el precio con iva del producto, multiplicarlo por la cantidad y mostrarlo en la tabla
c3.addEventListener("focusout", () =>{ 
    producto3.sumaIva();
    let can3 = c3.value;
    t3 = valorParcial(can3,producto3.precio);
    document.getElementById("vt3").innerText = `$ ${t3}`;
});

//Evento on click para calcular el total de la compra
document.getElementById("total").onclick= () => {
    let tt=valorTotal(t1,t2,t3);
    mostrarTotal(tt);
}

//Evento on click para reinicializar variables
document.getElementById("nuevo").onclick= () => {
    t1=0;
    t2=0;
    t3=0;
    document.getElementById("totalt").innerText = ` `;
    document.getElementById("vt1").innerText = ` `;
    document.getElementById("vt2").innerText = ` `;
    document.getElementById("vt3").innerText = ` `;
    producto1.precio = "350000";
    producto2.precio = "1200000";
    producto3.precio = "190000";
    c1.value=0; 
    c2.value=0; 
    c3.value=0; 
}

