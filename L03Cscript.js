/**Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500 */

let contadora = 1
let soma = 0

while (contadora <= 500) {
    if (contadora % 2 == 0) {
        soma = soma + contadora
    }

    contadora++
}

console.log("O somatório dos valores pares de 1 até 500 é: " + soma)
