
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}


//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while (contador2 >=0) {
    console.log(contador2);
    contador2--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = prompt("Digite um número para iniciar a contagem regressiva:");

while (numero >= 0) {
    console.log(numero);
    numero--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero2 = prompt("Digite um número para iniciar a contagem progressiva:");

while (numero2 <= 0) {
    console.log(numero2);
    numero2++
}