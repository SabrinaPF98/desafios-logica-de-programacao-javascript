alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
let palpite = prompt("Escolha um número entre 1 e 30");  // pede o palpite e guarda na variavel

if (palpite == numeroSecreto) {
    console.log("Isso ai! Você descobriu o número secreto (29)");
} else {
    console.log("Que pena! Você errou o número secreto.");
}