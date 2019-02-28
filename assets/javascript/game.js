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
                subOne= resultado.substring(0,x);
                subTwo=resultado.substring(x+1)
                resultado= subOne + upperLetra + subTwo;
                console.log("subOne: " + resultado);
                if(resultado === upperCase){
                    randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
                }
               
            }
            else{
               console.log("not!");
            }
        }
        console.log(numGuess);
      
    }
}