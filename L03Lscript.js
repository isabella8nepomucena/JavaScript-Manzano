/**Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.  */

let numero = parseInt(prompt("Digite um número positivo:"))

let maior = numero
let menor = numero

while (numero >= 0) {

    if (numero > maior) {
        maior = numero
    }

    if (numero < menor) {
        menor = numero
    }

    numero = parseInt(prompt("Digite outro número positivo ou um número negativo para terminar:"))
}

console.log("Maior valor: " + maior)
console.log("Menor valor: " + menor)
