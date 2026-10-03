/**Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.  */

var dividendo
var divisor
var quociente = 0

dividendo = parseInt(prompt("Digite o dividendo:"))
divisor = parseInt(prompt("Digite o divisor:"))

if (divisor > 0 && dividendo >= 0) {

    do {
        if (dividendo >= divisor) {
            dividendo = dividendo - divisor
            quociente++;
        }
    } while (dividendo >= divisor)

    alert("Resultado inteiro da divisão: " + quociente)

} else {
    alert("Digite valores válidos.")
}
