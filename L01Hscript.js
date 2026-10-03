/*Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME  COMPRIMENTO * LARGURA * ALTURA.*/

let comprimento = parseFloat(prompt("Digite o comprimento:"))
let largura = parseFloat(prompt("Digite a largura:"))
let altura = parseFloat(prompt("Digite a altura:"))

let volume = comprimento * largura * altura

console.log("O volume da caixa é: " + volume)