//Variables pertinentes
let Productos = [];
const title = document.querySelector('header');
const main = document.querySelector('main');
let btnEst = document.querySelector('#esta');
let btnVid = document.querySelector('#video');
let btnFot = document.querySelector('#foto');
let btnAds = document.querySelector('#ads');

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

function imprimir(tipo) {

	//VARIABLE PARA EL TITULO DE LA SECCIÓN
	let name = '';

	//SEGÚN PARÁMETRO DE ENTRADA SE DEFINE EL TÍTULO
	if (tipo === 'est') {
		name = 'estampados';
	} else if (tipo === 'pho') {
		name = 'fotografía';
	} else if (tipo === 'vid') {
		name = 'video';
	} else if (tipo === 'ad') {
		name = 'publicidad';
	} else {
		console.error('Invalid tipo');
	}

	//Filtrado de los objetos según parametro de enntrada
	let productosF = Productos.filter((elemento) => elemento.tipo === tipo.toUpperCase());

	//generación de un elemento div que contiene a los conjuntos de cards de los productos
	//Se adiciona el className y clases de bootstrap
	const div = document.createElement('div');
	div.className = 'container1 d-flex justify-content-center align-items-center flex-column';
	main.appendChild(div);

	//generación de un elemento h2 título de las card de los productos 
	//Se adiciona el className, textContent y clases de bootstrap
	const h2 = document.createElement('h2');
	h2.innerText = `Productos de ${name}`;
	h2.className = 'titulos d-flex justify-content-center align-items-center';
	div.appendChild(h2);

	//generación de un elemento div que contiene las cards de los productos 
	//Se adiciona el className
	const div1 = document.createElement('div');
	div1.className = 'cards-est';
	div.appendChild(div1);

	//por medio de un for of se recorre el array resultante del filtrado para poder generar las cards
	//correspondientes únicamente a los filtrados según el parametro de entrada de la función "imprimir"
	for (let item of productosF) {
		div1.innerHTML += `<div class="card">
                        <h4>${item.nombre}</h4>
                        <p>$ ${item.precio} + IVA</p>
                     </div>`;
	}
}

//EVENTOS CLICK PARA EJECUTAR SEGÚN EL BOTÓN UTILIZADO
btnEst.addEventListener('click', () => {
	//Remosión del primer elemento de la sección main
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
	//Impresión de cards según parámetro
	imprimir('est');
});

btnFot.addEventListener('click', () => {
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
	imprimir('pho');
});

btnVid.addEventListener('click', () => {
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
	imprimir('vid');
});

btnAds.addEventListener('click', () => {
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
	imprimir('ad');
});
