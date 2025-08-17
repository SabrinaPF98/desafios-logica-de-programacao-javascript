let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--
}

//toda vez que executar o while, o contador sera decrementado em 1 (ou seja, começa = a quantidade de numeros e cada vez que o usuario digitar um numero, o contador diminui em 1) ---- ex: começa sendo 3, e apos o primeiro numero digitado passara a ser 2, e assim sucessivamente ate ser igual a 0, dando fim ao while.

let media = soma / qtdNumeros;

console.log(media);