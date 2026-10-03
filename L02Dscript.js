/**Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */

let notae = parseFloat(prompt("Digite a primeira nota:"))
let notaf = parseFloat(prompt("Digite a segunda nota:"))
let notag = parseFloat(prompt("Digite a terceira nota:"))
let notah = parseFloat(prompt("Digite a quarta nota:"))

let media = (notae + notaf + notag + notah) / 4

if (media >= 7) {
    console.log("Aluno aprovado!")
    console.log("Média: " + media)
} else {
    let exame = parseFloat(prompt("Digite a nota do exame:"))

    let novaMedia = (media + exame) / 2

    if (novaMedia >= 5) {
        console.log("Aluno aprovado em exame!")
        console.log("Média final: " + novaMedia)
    } else {
        console.log("Aluno não aprovado!")
        console.log("Média final: " + novaMedia)
    }
}