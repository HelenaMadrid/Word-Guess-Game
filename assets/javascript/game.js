var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");
var audios = ["audioOne", "audioTwo", "audioThree"];
//var audiofiles=audios[Math.floor(Math.random()*audios.length)];
var imageArray = ["assets/images/outersenshis.jpg", "assets/images/Sailor-Moon-Poster.jpg", "assets/images/sailor-moon-bg-2.jpg"];
var wins = 0;
var resultado = "";
var subOne = "";
var subTwo = "";
var numGuess = 15;
var guessed="";
var randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
var music = document.getElementById(audiofiles);
console.log("Tienes " + numGuess + " intentos");
var audiofiles = audios[Math.floor(Math.random() * audios.length)];

function musicPlay(){
    audiofiles = audios[Math.floor(Math.random() * audios.length)];
    music = document.getElementById(audiofiles);
    music.play();
}
function musicPause(music){
    music.pause();
}
function wordRandom(){
    randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
    for (var r = 0; r < randomItem.length; r++) {
        if (randomItem.charAt(r) === " ") {
            resultado += " ";
        }
        else {
            resultado += "X";
        }
    }
}
// 0 = Inicio
// 1 = Jugando
// 2 = Finalizado
var estadoJuego = 0;

document.onkeydown = function (event) {
var userWin = document.getElementById("word");
var remainGuess = document.getElementById("tries");
var alreadyGuessed = document.getElementById("letterGuessed");
var winsNum = document.getElementById("wins");
var image = document.getElementById("myImg");
var chartGuessed=[""];

    switch (estadoJuego) {
        case 0: // Inicio
            //var inicio = event.key;
            // Código cuando se presiona una tecla y aún no inicia el juego
            wordRandom();
            console.log(randomItem);
            console.log("placeholder: " + resultado);
            userWin.textContent = resultado;
            estadoJuego = 1;
            break;

        case 1: // Jugando
            // Código cuando se presiona una tecla durante el juego
            var user = event.key;
            var upperCase = randomItem.toLocaleUpperCase();
            var upperLetra = user.toLocaleUpperCase();

            console.log(upperCase);
            console.log(user);
            console.log(upperLetra);
            
            if(!guessed.includes(upperLetra)){
                guessed += upperLetra + ", ";
            
                if (upperCase.indexOf(upperLetra) === -1) {
                    numGuess--;

                    console.log("te quedan " + numGuess + " intentos");

                    if (numGuess === 0) {
                        console.log("You lost!");
                        estadoJuego = 3;
                        //throw new Error("Sorry!");
                    }
                }

                else {
                    console.log("Yes! " + upperLetra + " is in this word");
                    
                    for(var x=1; x<chartGuessed.length; x++){
                        if(chartGuessed[x] === upperLetra){
                            console.log(chartGuessed[x])
                        }
                        else{
                            chartGuessed.push(upperLetra);
                            console.log(chartGuessed[x])
                        }
                    }

                    for(var x=0; x<chartGuessed.length; x++){
                        if(chartGuessed[x] === upperLetra){
                            console.log(chartGuessed[x])
                        }
                        else{
                            chartGuessed.push(upperLetra);
                            console.log(chartGuessed[x])
                        }
                    }
                    for (var x = 0; x < upperCase.length; x++) {
                        console.log(upperCase.charAt(x));
                    
                        if (upperLetra === upperCase.charAt(x)) {
                            console.log("match");
                            console.log("x is: " + x);
                            console.log("Resultado antes: " + resultado);
                            
                            subOne = resultado.substring(0, x);
                            subTwo = resultado.substring(x + 1)
                            resultado = subOne + upperLetra + subTwo;
                            
                            console.log("subOne: " + resultado);
                        }
                        else {
                            console.log("not!");
                        }
                    }
                console.log(numGuess);
                }   

                if (resultado === upperCase) {
                    wins++;
                    var imageNames = imageArray[Math.floor(Math.random() * imageArray.length)];
                    musicPlay();
                    image.src = imageNames;
                    winsNum.textContent = wins;
                    estadoJuego = 2;
                }
                userWin.textContent = resultado;
                remainGuess.textContent = numGuess;
                alreadyGuessed.textContent = guessed;
            } 
            break;

        case 2: // Finalizado
            // Código cuando se presiona una tecla y el juego finalizó (ganó o perdió)
            guessed="";
            alreadyGuessed.textContent = "";
            musicPause(music);
            resultado = "";
            numGuess = 15;
            remainGuess.textContent = numGuess;
            wordRandom();
            userWin.textContent = resultado;
            console.log(randomItem);
            console.log("placeholder: " + resultado);
            estadoJuego = 1;
            break;

        case 3:
            guessed="";
            alreadyGuessed.textContent = "";
            resultado = "";
            numGuess = 15;
            remainGuess.textContent = numGuess;
            wordRandom();
            userWin.textContent = resultado;
            console.log(randomItem);
            console.log("placeholder: " + resultado);
            estadoJuego = 1;
            break;
        
    }

}

