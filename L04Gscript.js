/**) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10. */

var numero = 1

do {
    var fatorial = 1
    var i = 1

    do {
        fatorial = fatorial * i
        i++
    } while (i <= numero)

    alert(numero + "! = " + fatorial)

    numero = numero + 2

} while (numero <= 10)
