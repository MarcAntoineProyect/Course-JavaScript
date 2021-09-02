//Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
	return lado * 4;
}
function areaCuadrado(lado) {
	return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo (lado1, lado2, lado3) {
	return lado1 + lado2 + lado3;
} 
function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulos");
	// Diametro
function diametroCirculo (radio) {
	return radio * 2;
}
// PI
const PI = Math.PI;
// Circunferencia
function perimetroCirculo (radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}
//Area
function areaCirculo (radio) {
	return(radio * radio) * PI;
}

console.groupEnd();


//Interaccion Html
function calcularPerimetroCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;
	const perimetro = perimetroCuadrado(value);
	alert(perimetro);
}
function calcularAreaCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;
	const area = areaCuadrado(value);
	alert(area);
}

function calcularPerimetroTriangulo() {
	const input = document.getElementById("inputTriangulo");
	const lado1 = parseInt(ladoTriangulo1.value);
	const lado2 = parseInt(ladoTriangulo2.value);
	const lado3 = parseInt(ladoTriangulo3.value);
	const perimetro = perimetroTriangulo(lado1, lado2, lado3);
	alert(perimetro);
}
function calcularAreaTriangulo () {
	const input = document.getElementById("inputTriangulo");
	const lado1 = parseInt(ladoTriangulo1.value);
	const lado2 = parseInt(ladoTriangulo2.value);
	const lado3 = parseInt(ladoTriangulo3.value);
	const area = areaTriangulo(lado1, lado2, lado3);
	alert(area);
}

function calcularPerimetroCirculo() {
	const input = document.getElementById("inputCirculo");
	const radio = input.value;
	const diametro = diametroCirculo ();
	const perimetro = parseInt(perimetroCirculo(radio));
	alert(perimetro);
}
function calcularAreaCirculo() {
	const input = document.getElementById("inputCirculo");
	const radio = input.value;
	const area = parseInt(areaCirculo(radio));
	alert(area);
}




