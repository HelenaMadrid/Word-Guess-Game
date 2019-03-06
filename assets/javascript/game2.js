var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");
var audios = ["audioOne", "audioTwo", "audioThree"];
//var audiofiles=audios[Math.floor(Math.random()*audios.length)];
var imageArray = ["assets/images/outersenshis.jpg", "assets/images/Sailor-Moon-Poster.jpg", "assets/images/sailor-moon-bg-2.jpg"];
var wins = 0;
var resultado = "";
resDos = "";
var subOne = "";
var subTwo = "";
var numGuess = 15;
console.log("Tienes " + numGuess + " intentos");
var randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
for (var r = 0; r < randomItem.length; r++) {
    if (randomItem.charAt(r) === " ") {
        resultado += " ";
    }
    else {
        resultado += "X";
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
    switch (estadoJuego) {
        case 0: // Inicio
            //var inicio = event.key;
            // Código cuando se presiona una tecla y aún no inicia el juego
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
            
            if (upperCase.indexOf(upperLetra) === -1) {
                numGuess--;

                console.log("te quedan " + numGuess + " intentos");

                if (numGuess === 0) {
                    console.log("You lost!");
                    estadoJuego = 2;
                    //throw new Error("Sorry!");
                }
            }

            else {
                console.log("Yes! " + upperLetra + " is in this word");
                
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
            userWin.textContent = resultado;

            remainGuess.textContent = numGuess;

            alreadyGuessed.textContent += event.key.toLocaleUpperCase() + " ";

            if (resultado === upperCase) {
                wins++;
                var imageNames = imageArray[Math.floor(Math.random() * imageArray.length)];
                var audiofiles = audios[Math.floor(Math.random() * audios.length)];
                var music = document.getElementById(audiofiles);
                image.src = imageNames;
                music.play();
                winsNum.textContent = wins;
                estadoJuego = 2;
            }
            break;

        case 2: // Finalizado
            // Código cuando se presiona una tecla y el juego finalizó (ganó o perdió)
            alreadyGuessed.textContent = "";
            resultado = "";
            var music = document.getElementById(audiofiles);
            numGuess = 15;
            remainGuess.textContent = numGuess;
            randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
            for (var r = 0; r < randomItem.length; r++) {
                if (randomItem.charAt(r) === " ") {
                    resultado += " ";
                }
                else {
                    resultado += "X";
                }
            }
            userWin.textContent = resultado;
            console.log(randomItem);
            console.log("placeholder: " + resultado);
            estadoJuego = 1;
            break;
    }

}

