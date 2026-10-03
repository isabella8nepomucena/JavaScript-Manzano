/**Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.  */

let A = parseInt(prompt("Digite o primeiro número:"))
let B = parseInt(prompt("Digite o segundo número:"))
let C = parseInt(prompt("Digite o terceiro número:"))
let D = parseInt(prompt("Digite o quarto número:"))
let E = parseInt(prompt("Digite o quinto número:"))

let maior = A
let menor = A

if (B > maior) {
    maior = B
}

if (C > maior) {
    maior = C
}

if (D > maior) {
    maior = D
}

if (E > maior) {
    maior = E
}

if (B < menor) {
    menor = B
}

if (C < menor) {
    menor = C
}

if (D < menor) {
    menor = D
}

if (E < menor) {
    menor = E
}

console.log("Maior: " + maior)
console.log("Menor: " + menor)