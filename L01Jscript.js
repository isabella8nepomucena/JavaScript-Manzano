/**Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira. */

let cotacao = parseFloat(prompt("Digite a cotação do dólar:"))
let dolares = parseFloat(prompt("Digite a quantidade de dólares:"))

let reais = cotacao * dolares

console.log("Valor em reais: R$ " + reais)