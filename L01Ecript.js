/*Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).*/

let valor = parseFloat(prompt("Digite o valor da prestação: "))
let taxa = parseFloat(prompt("Digite a taxa de juros (%): "))
let tempo = parseFloat(prompt("Digite o tempo de atraso: "))

let prestacao = valor + (valor * taxa / 100) * tempo;

console.log("Qual o valor da prestação em atraso?: " + prestacao)