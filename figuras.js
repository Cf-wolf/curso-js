//codigo del cuadrado
console.group("cuadrado")
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()

//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd()

//codigo del triangulo

console.group("triangulo")

//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//const ladoTriangulo3 = 4;

//const alturaTriangulo = 5.5;

//console.log("lado izquierdo del triangulo: " + ladoTriangulo1 + "cm");

//console.log("lado derecho del triangulo: " + ladoTriangulo2 + "cm");

//console.log("lado abajo del triangulo: " + ladoTriangulo3 + "cm");

//console.log("altura del triangulo: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
//console.log ("el perimetro del triangulo es: " + perimetroTriangulo + "cm"); 

function areaTriangulo (base, altura){
    return base * altura / 2
}




//aqui esta la altura del triangulo 
function base2 (base){
    return base / 2
}

function alturaTriangulo (base2, lado1){
    return (Math.sqrt((lado1 * lado1) - (base2 * base2) ));
}





//const area =  ladoTriangulo3 * alturaTriangulo / 2;
//console.log( "el area del trianggulo es: " + area + "cm2")

console.groupEnd()

// codigo de la circunferencia

console.group("circulo")

//const radio = 4;

//const diametro = 8; 

//const pi = 3.141592653589793;

//const perimetroCirculo = pi * diametro;

function perimetroCirculo (radio){
    return 2 * 3.141592653589793 * radio
}

//const radiox2 = radio * radio;

//const areaCirculo = radiox2 * pi ;

function areaCirculo (radio1){
    return radio1 * radio1 *3.141592653589793
}


//console.log("El radio del circulo es: " + radio +  "cm");

//console.log("El diametro del circulo es: " + diametro + "cm");

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//console.log("el area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();


// aqui interactuaremos con el html 


function  calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro); 
    
}
function   calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area); 
}







//qui es el area y perimetro del circulo





function  calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro); 
    
}
function   calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area); 
}





/// esto es del triangulo de los huevos


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloI");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloD");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTrianguloB");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es " + perimetro);
}

//AREA DE TRIANGULO


function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloI");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloD");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTrianguloB");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}

// aqui esta la altura del triangulo 

function calcularAlturaTriangulo(){
    const input = document.getElementById("BaseT");
    const value = Number(input.value);

    const input1 = document.getElementById("trianguloLado");
    const value1= Number(input1.value1);



    const altura = alturaTriangulo(value, value1);

    consle.log("La altura del triangulo es: " + altura);
    alert("La altura del triangulo es: " + altura);

}








