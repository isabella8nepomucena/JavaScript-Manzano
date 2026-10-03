/** Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.  */

let C = 10

while (C <= 100) {
    let F = (9 * C + 160) / 5

    console.log("Celsius: " + C + " °C | Fahrenheit: " + F + " °F")

    C = C + 10
}
