/**Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido.  */

let contadora = 1
let soma = 0

do {
    let numero = parseInt(prompt("Digite o " + contadora + "º número:"))
    let fatorial = 1
    let i = 1

    do {
        fatorial *= i
        i++
    } while (i <= numero)

    soma += fatorial
    contadora++

} while (contadora <= 15)

alert("Somatório das fatoriais: " + soma)