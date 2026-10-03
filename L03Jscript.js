/**) Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70. */

let numero = 50
let soma = 0
let quantidade = 0

while (numero <= 70) {
    if (numero % 2 == 0) {
        soma = soma + numero
        quantidade++
    }

    numero++
}

let media = soma / quantidade

console.log("Soma dos valores pares: " + soma)
console.log("Média dos valores pares: " + media)