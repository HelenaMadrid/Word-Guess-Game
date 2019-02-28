// versión  1.0  

var numGuess = 15;
//for(var i=0; i <= sailorMoon.length-1; i++){  *
    var letra = "a";
    var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = letra.toLocaleUpperCase();
    console.log(upperLetra);
    for(var x = 0; x <=upperCase.length-1; x++){
        console.log(upperCase.charAt(x));
        if(upperLetra === upperCase.charAt(x)){
            console.log("match");
        }
        else{
            console.log("not!");
            numGuess--;
            console.log(numGuess);
            if(numGuess === 0){
                console.log("You lost!");
                throw new Error("Sorry!");
            }
        }
    }
//}  *

//_________________________________________________________________________

//Versión 1.1

var resultado="";
var numGuess = 15;
//for(var i=0; i <= sailorMoon.length-1; i++){  *
    var letra = "a";
    var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = letra.toLocaleUpperCase();
    console.log(upperLetra);
    for(var x = 0; x <=upperCase.length-1; x++){
        console.log(upperCase.charAt(x));
        if(upperLetra === upperCase.charAt(x)){
            console.log("match");
            resultado += upperLetra;
            console.log(resultado);
        }
        else{
            console.log("not!");
            resultado += "X";
            numGuess--;
            console.log(numGuess);
            if(numGuess === 0){
                console.log("You lost!");
                throw new Error("Sorry!");
            }
        }
    }
    console.log(resultado);
//}  *

//_________________________________________________________________________

//Version 1.2 

var yesOrno=true;
var resultado="";
var numGuess = 15;
console.log("Tienes " + numGuess + " intentos");
//for(var i=0; i <= sailorMoon.length-1; i++){  *
    //var letra = "a";
for (var i=0; i <= inputUser.length-1; i++){    
    var user = inputUser[Math.floor(Math.random()*inputUser.length)]
    console.log(user);
    var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    if(upperCase.indexOf(upperLetra) === -1){
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if(numGuess === 0){
            console.log("You lost!");
            throw new Error("Sorry!");
        }
    }
    else{
        for(var x = 0; x <=upperCase.length-1; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
                console.log("match");
                resultado += upperLetra;
                console.log(resultado);
            }
            else{
                console.log("not!");
                resultado += "X";
            }
        }
        console.log(numGuess);
    }
    console.log(resultado);
}

    //_________________________________________________________________________

    //versión 1.3

var yesOrno=true;
var resultado="";
var numGuess = 15;
console.log("Tienes " + numGuess + " intentos");
//for(var i=0; i <= sailorMoon.length-1; i++){  *
    //var letra = "a";
for (var i=0; i <= inputUser.length-1; i++){  
    var user = inputUser[Math.floor(Math.random()*inputUser.length)]
    console.log(user);
    var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    if(upperCase.indexOf(upperLetra) === -1){
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if(numGuess === 0){
            console.log("You lost!");
            throw new Error("Sorry!");
        }
    }
    else{
        for(var x = 0; x <=upperCase.length-1; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
                console.log("match");
                resultado += upperLetra;
                console.log(resultado);
            }
            else{
                console.log("not!");
                resultado += "X";
            }
        }
        console.log(numGuess);
    }
    console.log(resultado);
}
//_________________________________________________________________________
// Version 1.4

//var  test = [];
//test.push("hola");
//console.log(test[0]);

var yesOrno=true;
var resultado="";
var numGuess = 15;
console.log("Tienes " + numGuess + " intentos");
//for(var i=0; i <= sailorMoon.length-1; i++){  *
    //var letra = "a";
var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
for (var i=0; i <= inputUser.length-1; i++){  
    var user = inputUser[Math.floor(Math.random()*inputUser.length)]
    console.log(user);
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    if(upperCase.indexOf(upperLetra) === -1){
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if(numGuess === 0){
            console.log("You lost!");
            //throw new Error("Sorry!");
        }
    }
    else{
        for(var x = 0; x <=upperCase.length-1; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
                test.push(upperLetra);
                console.log("match");
                resultado += upperLetra;
                console.log(resultado);
            }
            else{
                test.push("");
                console.log("not!");
                resultado += "X";
            }
        }
        console.log(numGuess);
    }
    console.log(resultado);
}
//var text = "<p>";
//for(var t=0; t<=test.length-1;t++){
//    console.log(test[t]);
//    text+=""+test[t]+"";
//}
//text+="</p>";
//console.log(text);
//console.log(text.length);

//_________________________________________________________________________
// Version 1.5

var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");

//var inputUser = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r","s","t","u","v","w", "x","y","z"];




//var saludoTres=document.getElementById("print");
//saludoTres.textContent = "hola";
var resultado="";
var numGuess = 15;
console.log("Tienes " + numGuess + " intentos");
//for(var i=0; i <= sailorMoon.length-1; i++){  *
var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
for(var r=0; r < randomItem.length; r++){
     if(randomItem.charAt(r) === " "){
           resultado+= " ";
     }
        else{
         resultado += "X";
    }
}

//for (var i=0; i <= inputUser.length-1; i++){  
    //var user = inputUser[Math.floor(Math.random()*inputUser.length)]
    document.onkeydown = function(event){
    var user = event.key;
    console.log(user);
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    console.log("placeholder: " + resultado);
    if(upperCase.indexOf(upperLetra) === -1){
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if(numGuess === 0){
            console.log("You lost!");
            throw new Error("Sorry!");
        }
    }
    else{
        console.log("Yes! " + upperLetra + " is in this word");
        for(var x = 0; x < upperCase.length; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
                console.log("match");
                console.log(resultado.charAt(x));
                //var replace=resultado.replace(resultado.charAt(x), upperLetra);
                resultado.charAt(x)==upperLetra;
                console.log("soy " + resultado);
            }
            else{
               console.log("not!");
               //if(resultado.charAt(x) == "" || resultado.charAt(x) == "X"){
                    //resultado.charAt(x)=="X";
                //resultado += "X";
               // }
            }
        }

        console.log(numGuess);
       // console.log(resultado);
       
    }
}
//}

//  var res = str.replace("Microsoft", "W3Schools");






//}  *

//indexOf   si es -1 no está 
//function Abort()
//{
//   throw new Error('This is not an error. This is just to abort javascript');
//}

// 1. Necesito que mi programa elija un string contenido en mi array
// 2. Necesito que después de elegido uno convertir en mayúsculas ese string
// 3. luego pedirle a la persona que le pique una letra
// 4. luego, esa letra pasarla a mayúsculas
// 5. después de pasar a mayúsculas usar el .charAt() dentro de un for y usando lenght para que compare si es una letra que está ahí
// 6. hacer un if, de si la letra está que se ponga en su lugar, si no está, el número de guesses baja 1 punto. Nota: hacer que si ya le pico a una letra que no está, no se baje el número de intentos.





//Probelas o dudas:
//Tengo que hacer que cheque si la letra está, y solo cobrarle una vez si está  mal.
//

//_________________________________________________________________________
// Version 1.6

var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");

//var saludoTres=document.getElementById("print");
//saludoTres.textContent = "hola";
var numGuess = 15;
var resultado="";
resDos="";
var subOne="";
var subTwo="";
console.log("Tienes " + numGuess + " intentos");
//for(var i=0; i <= sailorMoon.length-1; i++){  *
var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
for(var r=0; r < randomItem.length; r++){
     if(randomItem.charAt(r) === " "){
           resultado+= " ";
     }
        else{
         resultado += "X";
    }
}
    document.onkeydown = function(event){
    var user = event.key;
    console.log(user);
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    console.log("placeholder: " + resultado);
    if(upperCase.indexOf(upperLetra) === -1){
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if(numGuess === 0){
            console.log("You lost!");
            throw new Error("Sorry!");
        }
    }
    else{
        console.log("Yes! " + upperLetra + " is in this word");
        for(var x = 0; x < upperCase.length; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
                console.log("match");
                console.log("x is: " + x);
                console.log("Resultado antes: " + resultado);
                //console.log(resultado.charAt(x));
                //var replace =resultado.replace(resultado.charAt(5), upperLetra);
                subOne= resultado.substring(0,x);
                subTwo=resultado.substring(x+1)
                resultado= subOne + upperLetra + subTwo;
                
                console.log("subOne: " + resultado);
               
            }
            else{
               console.log("not!");
               //if(resultado.charAt(x) == "" || resultado.charAt(x) == "X"){
                    //resultado.charAt(x)=="X";
                //resDos += "X";
               // }
            }
        }
        console.log(numGuess);
       // console.log(resultado); 
    }

  

//}  *

//indexOf   si es -1 no está 
//function Abort()
//{
//   throw new Error('This is not an error. This is just to abort javascript');
//}

// 1. Necesito que mi programa elija un string contenido en mi array
// 2. Necesito que después de elegido uno convertir en mayúsculas ese string
// 3. luego pedirle a la persona que le pique una letra
// 4. luego, esa letra pasarla a mayúsculas
// 5. después de pasar a mayúsculas usar el .charAt() dentro de un for y usando lenght para que compare si es una letra que está ahí
// 6. hacer un if, de si la letra está que se ponga en su lugar, si no está, el número de guesses baja 1 punto. Nota: hacer que si ya le pico a una letra que no está, no se baje el número de intentos.





//Probelas o dudas:
//Tengo que hacer que cheque si la letra está, y solo cobrarle una vez si está  mal.
//

//_________________________________________________________________________
// Version 1.6