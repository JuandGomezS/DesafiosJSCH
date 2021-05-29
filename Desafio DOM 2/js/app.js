
//Variables pertinentes
let Productos = [];
const title = document.querySelector('header');
const main = document.querySelector('main');


//Clase constructor del objeto tipo producto
class Producto {
	constructor(tipo, nombre, precio, iva, descuento) {
		this.tipo = tipo.toUpperCase();
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
		this.iva = parseFloat(iva);
		this.descuento = parseFloat(descuento);
	}

	//funcion para calcular el precio al aumentar el iva
	sumaIva() {
		this.precio = this.precio * (1 + this.iva / 100);
	}
}

//productos de estampados
const camisetas = new Producto('est', 'Camisetas', '5000', '19', '0');
const posillos = new Producto('est', 'Posillos', '2000', '19', '0');
const gorras = new Producto('est', 'Gorras', '3000', '19', '0');
const platos = new Producto('est', 'Platos', '2000', '19', '0');

//productos de fotografía
const fotografiaD = new Producto('pho', 'Fotografía digital', '5000', '19', '0');
const fotografiaI = new Producto('pho', 'Fotografía Impresa', '7000', '19', '0');

//productos de video
const videoGr = new Producto('vid', 'Video Digital', '25000', '19', '0');
const videoEd = new Producto('vid', 'Video Digital', '30000', '19', '0');
const videoGe = new Producto('vid', 'Video Digital', '50000', '19', '0');

//Publicidad
const publicidadB = new Producto('ad', 'Branding', '50000', '19', '0');
const publicidadSN = new Producto('ad', 'Redes Sociales', '100000', '19', '0');

//Push para agregar los productos al array "Productos"
Productos.push(
	camisetas,
	posillos,
	gorras,
	platos,
	fotografiaD,
	fotografiaI,
	videoGr,
	videoEd,
	videoGe,
	publicidadB,
	publicidadSN
);

//generación de un elemento h1 para el header
const h1 = document.createElement('h1');
h1.textContent = 'Nuestros Productos';
h1.className = 'titulo d-flex justify-content-center align-items-center';
title.appendChild(h1);

//generación de un elemento div que contiene a los conjuntos de cards de los productos 
//Se adiciona el className y clases de bootstrap
const div = document.createElement('div');
div.className = 'container1 d-flex justify-content-center align-items-center flex-column';
main.appendChild(div);

//generación de un elemento h2 título de las card de los productos de estampados
//Se adiciona el className, textContent y clases de bootstrap
const h2 = document.createElement('h2');
h2.textContent = 'productos de estampados';
h2.className = 'titulos d-flex justify-content-center align-items-center';
div.appendChild(h2);

//generación de un elemento div que contiene las cards de los productos de estampados
//Se adiciona el className
const div1 = document.createElement('div');
div1.className = 'cards-est';
div.appendChild(div1);

//Filtrado de los objetos de tipo EST estampado
let productosEst = Productos.filter(elemento => elemento.tipo === "EST");

//por medio de un for of se recorre el array resultante del filtrado para poder generar las cards
//correspondientes únicamente a estampados
for (let item of productosEst) {
	div1.innerHTML += `<div class="card">
                        <h4>${item.nombre}</h4>
                        <p>$ ${item.precio} + IVA</p>
                     </div>`;
}


//generación de un elemento h2 título de las card de los productos de fotografía
//Se adiciona el className, textContent y clases de bootstrap
const h21 = document.createElement('h2');
h21.textContent = 'productos de fotografía';
h21.className = 'titulos d-flex justify-content-center align-items-center';
div.appendChild(h21);

//generación de un elemento div que contiene las cards de los productos de fotografía
//Se adiciona el className
const div2 = document.createElement('div');
div2.className = 'cards-ph';
div.appendChild(div2);


//Filtrado de los objetos de tipo PHO fotografía
let productosPh = Productos.filter(elemento => elemento.tipo === "PHO");


//por medio de un for of se recorre el array resultante del filtrado para poder generar las cards
//correspondientes únicamente a fotografia
for (let item of productosPh) {
	div2.innerHTML += `<div class="card">
                        <h4>${item.nombre}</h4>
                        <p>$ ${item.precio} + IVA</p>
                     </div>`;
}


//generación de un elemento h2 título de las card de los productos de video
//Se adiciona el className, textContent y clases de bootstrap
const h22 = document.createElement('h2');
h22.textContent = 'productos de video';
h22.className = 'titulos d-flex justify-content-center align-items-center';
div.appendChild(h22);


//generación de un elemento div que contiene las cards de los productos de video
//Se adiciona el className
const div3 = document.createElement('div');
div3.className = 'cards-vd';
div.appendChild(div3);


//Filtrado de los objetos de tipo VID video
let productosVi = Productos.filter(elemento => elemento.tipo === "VID");


//por medio de un for of se recorre el array resultante del filtrado para poder generar las cards
//correspondientes únicamente a video
for (let item of productosVi) {
	div3.innerHTML += `<div class="card">
                        <h4>${item.nombre}</h4>
                        <p>$ ${item.precio} + IVA</p>
                     </div>`;
}


//generación de un elemento h2 título de las card de los productos de publicidad
//Se adiciona el className, textContent y clases de bootstrap
const h23 = document.createElement('h2');
h23.textContent = 'productos de publicidad';
h23.className = 'titulos d-flex justify-content-center align-items-center';
div.appendChild(h23);


//generación de un elemento div que contiene las cards de los productos de publicidad
//Se adiciona el className
const div4 = document.createElement('div');
div4.className = 'cards-ads';
div.appendChild(div4);


//Filtrado de los objetos de tipo AD publicidad
let productosAd = Productos.filter(elemento => elemento.tipo === "AD");


//generación de un elemento h2 título de las card de los productos de publicidad
//Se adiciona el className, textContent y clases de bootstrap
for (let item of productosAd) {
	div4.innerHTML += `<div class="card">
                        <h4>${item.nombre}</h4>
                        <p>$ ${item.precio} + IVA</p>
                     </div>`;
}