/**Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor. */

let A = parseInt(prompt("Digite o primeiro número:"))
let B = parseInt(prompt("Digite o segundo número:"))

let resultado

if (A > B) {
    resultado = A - B
} else {
    resultado = B - A
}

console.log("A diferença do maior pelo menor é: " + resultado)