//Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
//Volume *Raio * Altura

let raio = parseFloat(prompt("Digite o raio da lata: "))
let altura = parseFloat(prompt("Digite a altura da lata: "))

let volume = Math.PI * (t=raio ** 2) * altura

console.log("O volume da lata é: " + volume)
