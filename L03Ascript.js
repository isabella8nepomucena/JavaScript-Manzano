/**Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.  */

alert("Diga um valor e direi sua tabuada (de 1 a 10)")
 
numero = parseInt(prompt("Digite o número base"))
multiplicacao = 1
 
while (multiplicacao <=10) {
  resultado = numero * multiplicacao
alert(numero + "X" + multiplicacao + "=" + resultado)
multiplicação++
}