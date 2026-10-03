/** Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos.*/

let A = parseFloat(prompt("Digite o valor de A:"))
let B = parseFloat(prompt("Digite o valor de B:"))
let C = parseFloat(prompt("Digite o valor de C:"))

let resultado = (A ** 2) + (B ** 2) + (C ** 2)

console.log("A soma dos quadrados é: " + resultado)