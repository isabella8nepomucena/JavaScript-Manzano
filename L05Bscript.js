//B) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

base = parseInt(prompt("Qual o numero voce deseja multiplicar"))
 
 
for(
let multiplicador = 1; multiplicador <=10; multiplicador++
){
    resultado = base * multiplicador
    console.log(base + " x " + multiplicador + " = " + resultado )
}