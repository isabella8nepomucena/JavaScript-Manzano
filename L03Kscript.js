/**Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencia */

let nome
let largura
let comprimento
let area
let total = 0
let continuar = "SIM"

while (continuar != "NAO") {
    nome = prompt("Digite o nome do cômodo:")
    largura = parseFloat(prompt("Digite a largura do cômodo:"))
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))

    area = largura * comprimento
    total = total + area

    console.log("Cômodo: " + nome);
    console.log("Área: " + area + " m²")

    continuar = prompt("Deseja calcular outro cômodo? Digite SIM ou NAO:")
}

console.log("Área total da residência: " + total + " m²")
