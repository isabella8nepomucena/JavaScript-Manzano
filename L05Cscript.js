//C) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

 
alert("Programa somatório de número (1 à 100)")
somatorio = 0
for (
    numero = 1; numero <= 100; numero++
) {
    somatorio = somatorio + numero
}
    console.log("O somatório dos números de 1 à 100 é :" + somatorio)
 