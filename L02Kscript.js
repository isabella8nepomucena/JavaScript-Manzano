/**Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua 
apresentação, caso o valor não seja maior que três */

let valor = parseInt(prompt("Digite um número inteiro:"));

if (valor <= 3) {
    console.log("O valor é: " + valor);
}