var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");
var inputUser = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r","s","t","u","v","w", "x","y","z"];

//var randomItem = sailorMoon[Math.floor(Math.random()*sailorMoon.length)];
//console.log(randomItem);

//var areEqual = string1.toUpperCase() === string2.toUpperCase();
//var areEqual = string1 === string2; esto sería boleano y no necesito esto

//document.write(randomItem);

//function myFunction(){
   // var prInt = "hello";
    //document.getElementById("print").innerHTML = prInt;
    //console.log(prInt);
//}

//var  test = [];
//test.push("hola");
//console.log(test[0]);

var yesOrno=true;
var resultado="XXXXXXXXXXXXXXXXXXXXXXXXX";
var numGuess = 15;
var resDos="";
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
            throw new Error("Sorry!");
        }
    }
    else{
        console.log("Yes! " + upperLetra + " is in this word");
        for(var x = 0; x <=upperCase.length-1; x++){
            console.log(upperCase.charAt(x));
            if(upperLetra === upperCase.charAt(x)){
               // test.push(upperLetra);
                console.log("match");
               // for(var h=0; h<=resultado.length-1; h++){
               //     if(resultado.charAt(h) === upperCase.charAt(h)){
               //         resultado="";
               //         resultado += upperCase.charAt(h);
               //     }
               //     else{
                 //       resultado+=upperCase.charAt(h);
                   // }
               // } 
               
                resultado.charAt(x)==upperCase.charAt(x);
                console.log("soy " + resultado);
               
    
                //resultado += upperLetra;
                //console.log(resultado);
            }
            else{
               // test.push("");
               console.log("not!");
               if(resultado.charAt(x) == "" || resultado.charAt(x) == "X"){
                    resultado.charAt(x)=="X";
                //resultado += "X";
                }
            }
        }

        console.log(numGuess);
        console.log(resultado);
       // resDos=resultado;
    }
    //console.log(resultado);
}
//var text = "<p>";
//for(var t=0; t<=test.length-1;t++){
//    console.log(test[t]);
//    text+=""+test[t]+"";
//}
//text+="</p>";
//console.log(text);
//console.log(text.length);





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