/**Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 
 */

resultado = ""

for (celsius = 10; celsius <= 100; celsius = celsius + 10) {
    fahrenheit = (celsius * 9 / 5) + 32

    resultado = resultado + 
        celsius + " °C = " + fahrenheit + " °F\n"
}

alert(resultado)
