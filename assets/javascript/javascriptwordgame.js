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