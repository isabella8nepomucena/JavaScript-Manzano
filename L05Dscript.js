//D) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
//1 até 500. 

alert("Programa somatório pares")

for(numero - 1; numero <-500; numero++)
{
    if(
        numero % 2 == 0
    ){
        pares += numero
    }
}
    alert("A soma de todos os pares (1 á 500) é : " + pares + ".")
