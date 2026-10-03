/**Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média. */

let valor
let soma = 0
let quantidade = 0
let media

do {
    valor = parseFloat(prompt("Digite um valor:"))

    if (valor >= 0) {
        soma += valor
        quantidade++
    }

} while (valor >= 0)

if (quantidade > 0) {
    media = soma / quantidade
} else {
    media = 0
}

alert(
    "Somatório: " + soma +
    "\nMédia: " + media +
    "\nTotal de valores lidos: " + quantidade
)
