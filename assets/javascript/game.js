var sailorMoon = ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Sailor Mars", "Sailor Jupiter", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto", "Tuxido Mask", "Chibi Moon", "Haruka", "Michiru"];
console.log("The Sailor Moon Array has " + sailorMoon.length + " elements.");
var audios = ["audioOne", "audioTwo", "audioThree"];
//var audiofiles=audios[Math.floor(Math.random()*audios.length)];
var imageArray = ["assets/images/outersenshis.jpg", "assets/images/Sailor-Moon-Poster.jpg", "assets/images/sailor-moon-bg-2.jpg"];
var numGuess = 15;
var wins = 0;
var resultado = "";
resDos = "";
var subOne = "";
var subTwo = "";
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
    switch (estadoJuego) {
        case 0: // Inicio
            // Código cuando se presiona una tecla y aún no inicia el juego
            estadoJuego = 1;
            break;

        case 1: // Jugando
            // Código cuando se presiona una tecla durante el juego
            estadoJuego = 2;
            break;

        case 2: // Finalizado
            // Código cuando se presiona una tecla y el juego finalizó (ganó o perdió)
            estadoJuego = 1;
            break;
    }

    var alreadyGuessed = document.getElementById("letterGuessed");
    var remainGuess = document.getElementById("tries");
    var winsNum = document.getElementById("wins");
    var user = event.key;
    console.log(user);
    console.log(randomItem);
    var upperCase = randomItem.toLocaleUpperCase();
    console.log(upperCase);
    var upperLetra = user.toLocaleUpperCase();
    console.log(upperLetra);
    console.log("placeholder: " + resultado);
    if (upperCase.indexOf(upperLetra) === -1) {
        numGuess--;
        console.log("te quedan " + numGuess + " intentos");
        if (numGuess === 0) {
            console.log("You lost!");
            randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
            resultado = "";
            numGuess = 15;
            for (var r = 0; r < randomItem.length; r++) {
                if (randomItem.charAt(r) === " ") {
                    resultado += " ";
                }
                else {
                    resultado += "X";
                }
            }
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
    var userWin = document.getElementById("game");
    userWin.textContent = resultado;
    if (resultado === upperCase) {
        alreadyGuessed.textContent = "";
        var image = document.getElementById("myImg");
        var imageNames = imageArray[Math.floor(Math.random() * imageArray.length)];
        image.src = imageNames;
        wins++;
        var audiofiles = audios[Math.floor(Math.random() * audios.length)];
        var music = document.getElementById(audiofiles);
        music.play();
        numGuess = 15;
        randomItem = sailorMoon[Math.floor(Math.random() * sailorMoon.length)];
        resultado = "";
        for (var r = 0; r < randomItem.length; r++) {
            if (randomItem.charAt(r) === " ") {
                resultado += " ";
            }
            else {
                resultado += "X";
            }
        }
    }
    remainGuess.textContent = numGuess;
    alreadyGuessed.textContent += event.key.toLocaleUpperCase() + " ";
    winsNum.textContent = wins;

}

