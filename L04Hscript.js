/** Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial.  */

var nome
var largura
var comprimento
var area
var total = 0
var continuar

do {
    nome = prompt("Digite o nome do cômodo:")
    largura = parseFloat(prompt("Digite a largura do cômodo:"))
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))

    area = largura * comprimento
    total = total + area

    alert("Cômodo: " + nome + "\nÁrea: " + area + " m²")

    continuar = prompt("Deseja calcular outro cômodo? (SIM/NAO)")

} while (continuar != "NAO")

alert("Área total da residência: " + total + " m²")
