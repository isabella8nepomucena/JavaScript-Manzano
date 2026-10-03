/**Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário. */

var numero
var maior
var menor

numero = parseInt(prompt("Digite um número positivo:"));

if (numero >= 0) {
    maior = numero
    menor = numero

    do {
        numero = parseInt(prompt("Digite outro número positivo ou um negativo para encerrar:"))

        if (numero >= 0) {
            if (numero > maior) {
                maior = numero
            }

            if (numero < menor) {
                menor = numero
            }
        }

    } while (numero >= 0)

    alert("Maior valor: " + maior + "\nMenor valor: " + menor)

} else {
    alert("Nenhum valor positivo foi informado.")
}
