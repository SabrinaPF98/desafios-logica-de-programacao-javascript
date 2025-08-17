# 🧮 Desafio Cálculo de Média com Looping em JavaScript

Este repositório contém uma atividade realizada durante o curso **"Lógica de programação: mergulhe em programação com JavaScript"** da [Alura](https://www.alura.com.br/).  

O objetivo foi **corrigir um código com looping infinito** e aplicar o raciocínio lógico para controlar a repetição do `while`.

---

## 📌 Descrição da Atividade

O programa pede ao usuário que digite:
1. A **quantidade de números** que deseja informar.  
2. Os **valores numéricos**, um a um.  

Em seguida, o sistema realiza o cálculo da **média aritmética** desses números e exibe o resultado no console.

---

## 🛠️ Código Corrigido

```javascript
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--; // decremento que garante que o while terá fim
}

```

---

## ⚠️ Problema do Código Original

O código inicial não possuía o decremento do contador dentro do while, o que resultava em um looping infinito:

```javascript
while (contador > 0) {
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}
```

---

## ✅ O que foi aprendido

A importância de controlar corretamente variáveis de repetição em laços `while`.

Como identificar e resolver loops infinitos.

Uso de prompts, parseInt e console.log em JavaScript para interação com o usuário.

---

## 🎯 Objetivo do Exercício

Exercitar o raciocínio lógico.

Praticar a aplicação de estruturas de repetição (`while`).

Garantir o controle de fluxo em algoritmos simples.
