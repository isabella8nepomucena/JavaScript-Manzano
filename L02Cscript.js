/**Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
valor da média do aluno para qualquer condição. */

let notaa = parseFloat(prompt("Digite a primeira nota:"))
let notab = parseFloat(prompt("Digite a segunda nota:"))
let notac = parseFloat(prompt("Digite a terceira nota:"))
let notad = parseFloat(prompt("Digite a quarta nota:"))

let media = (notaa + notab + notac + notad) / 4

if (media >= 5) {
    console.log("Aluno aprovado!")
    console.log("Média: " + media)
} else {
    console.log("Aluno não aprovado!")
    console.log("Média: " + media)
}