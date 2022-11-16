
//
let n1 = prompt("ingrese un numero");
let n2 = prompt("ingrese un numero");
alert("El resultado de la suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.
let celcius = prompt("ingrese temperatura");
mult=1,8
sumar=32

alert("la temperatura en Fahrenheit es: "+ ( parseInt(celcius) * parseInt(mult) + parseInt(sumar)))

//Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5//
let numero = prompt("ingrese un numero");
dividir=10
alert ("El resultado es: "+ ( parseInt(numero)/ parseInt(dividir) ) );

// Si a =  crear un script que determine de muestre un alert del tipo de dato de a
let a = [1,2,3];
console.log ("El tipo de dato es numerico")


// If and else
// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.
numero = prompt("Introduce un número entero");

 resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

let Num = prompt("ingrese un numero");
if (Num % 5 ===0)
{
    console.log("el numero"+" "+Num+" "+"es divisible por 5");
}else
{
    console.log("el numero"+" "+Num+" "+"no es divisible por 5");}

 // Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
 let Nro = prompt("ingrese un numero");
 if (Nro % 5 ===0 && Nro % 11===0)
 {console.log("el numero"+" "+Nro+" "+"es divisible por 5 y 11");
}else{
    console.log("el numero"+" "+Nro+" "+"no es divisible por 5 y 11");}

    // Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.    
 n1 = prompt("Escribe un número");
 n2 = prompt("Escribe otro número");
if (n1 > n2) {
    alert("El numero" + " "+n1+" "+"es mayor");
} else {
    alert("El numero" + " "+n2+" "+"es mayor");
}

// Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario
let Num1 =prompt("Escribe un número");
let Num2= prompt("Escribe otro número");
  n1> n2 ? mayor= Num1: mayor=Num2; 
 alert (('El mayor de los dos valores es:' + mayor));

//  Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
function tiene_numeros(texto) {
numeros = prompt("Intoduce numeros")
 texto = "asddfffdsss";
        for (i = 0; i < texto.length; i++) {

            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                console.log("Empieza con numeros" + numeros);
            }
            else{
                console.log("empieza con letras" + numeros);
            }
        }
        return  numeros;}
        // Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

       let b,c,d;
        b=parseFloat(prompt('Introduzca lado1'));
        c=parseFloat(prompt('Introduzca lado2'));
        d=parseFloat(prompt('Introduzca lado3'));
        
        if(b==c && c==d) 
            console.log('Es un triangulo');
           else 
          {
           if(b==c || c==d || b==d) 
            console.log(' No es un triangulo válido');
            }
          
 // Determinar si una palabra empieza con mayúscula o no.
 Palabra = "Arcoiris";
 function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   

console.log('==Determinar si un año dado es bisiesto==');
// Determinar si un año dado es bisiesto
anio = prompt("Intoduce un año")
if (((anio % 4 == 0) && (anio % 100 != 0 )) || (anio % 400 == 0)){
  console.log( anio + ' Es bisiesto. ');
}

else {
  console.log( anio + ' No es bisiesto ');
}

// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"
let numeroAlAzar = parseInt(Math.random() * (10 - 1) + 1);
console.log("numeroAlAzar: " + numeroAlAzar)
let Numeroing = parseInt(prompt("Ingresar Numero")); 
if (Numeroing === numeroAlAzar) {
  alert("Buen trabajo");
} else {
  alert("No corresponde");
}

// Obtener edad
let edad= prompt("Ingresar edad");
if(edad < 13) {
  console.log("Es niño");
}if(edad < 18 ){
   console.log("Es adolescente");
} else{
   console.log("No Es adolescente");
}

// Loops
let N1 =prompt("Escribe un número");
for (let i=1; i <= N1; i++) {
  console.log("nro: " + i);
}

// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
let ingreso =prompt("Escribe un número");
for (let i=1; i <= ingreso; i+2) {
  console.log("nro: " + i);
}

// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
let disminuye =prompt("Escribe un número");
if (disminuye && disminuye instanceof Number) {
  for (let i=disminuye; i >= 1; i--) {
    console.log ("nro: " - i);
  }
}

// Escribir utilizando console.log la tabla del 9 hasta 9x10
function tablaDeMultiplicar(nueve) {
  let i = 1;
  let result = 0;
  while(i<=10){
      result=i*nueve;
      console.log(nueve + "*" + i + "=" +  result);
      i++;
  }
}
tablaDeMultiplicar(9);

// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras
let valor1 = prompt("Ingrese el valor 1",0);
console.log("valor 1: " + valor1);
let valor2 = prompt("Ingrese el valor 2");
if (valor1 instanceof Number  && valor2 instanceof Number) {
  let sum = parseInt(valor1) + parseInt(valor2);
  console.log("resultado: " + sum);
} else {
  console.error("valor1, valor2 es invalido")
}

// Patrones con Loop anidados
