/**Efetuar a leitura de três valores (variáveis ) e efetuar o cálculo da equação completa de 
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.  */

let A = parseFloat(prompt("Digite o valor de A:"))
let B = parseFloat(prompt("Digite o valor de B:"))
let C = parseFloat(prompt("Digite o valor de C:"))

if (A == 0) {
    console.log("O valor de A deve ser diferente de zero.")
} else {
    let delta = (B * B) - (4 * A * C)

    if (delta < 0) {
        console.log("Não existem raízes reais.")
    } else {
        let raizDelta = delta ** 0.5

        let x1 = (-B + raizDelta) / (2 * A)
        let x2 = (-B - raizDelta) / (2 * A)

        console.log("Delta: " + delta)
        console.log("X1 = " + x1)
        console.log("X2 = " + x2)
    }
}