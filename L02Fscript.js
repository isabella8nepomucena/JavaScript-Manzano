/**Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.  */

let A = parseInt(prompt("Digite o valor de A:"))
let B = parseInt(prompt("Digite o valor de B:"))
let C = parseInt(prompt("Digite o valor de C:"))

let menor, meio, maior

if (A <= B && A <= C) {
    menor = A

    if (B <= C) {
        meio = B
        maior = C
    } else {
        meio = C
        maior = B
    }

} else if (B <= A && B <= C) {
    menor = B

    if (A <= C) {
        meio = A
        maior = C
    } else {
        meio = C
        maior = A
    }

} else {
    menor = C

    if (A <= B) {
        meio = A
        maior = B
    } else {
        meio = B
        maior = A
    }
}