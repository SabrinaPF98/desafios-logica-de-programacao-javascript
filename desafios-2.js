//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
}
else {
    alert("Boa semana!");
}

//outra opção:
if (diaDaSemana === "Sábado") {
    alert("Bom fim de semana!");
} else if (diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número positivo ou negativo:");

if (numero < 0) {
    alert("O número é negativo!");
}
else {
    alert("O número é positivo!");
}


//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Digite sua pontuação:");

if(pontuacao >= 100) {
    alert ("Parabéns, você venceu!");
}
else {
    alert("Tente novamente para ganhar.");
}

//outra opção:

pontuacao = 105
if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
}
else {
    console.log("Tente novamente para ganhar.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = prompt("Digite qual o seu saldo:");
alert(`Seu saldo é: R$${saldo}.`);

//outra opção:

let saldoConta = 500 //exemplo de saldo
alert(`Seu saldo é: R$${saldoConta}.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome =prompt("Digite o seu nome:");
alert(`Bem-vindo(a), ${nome}!`);