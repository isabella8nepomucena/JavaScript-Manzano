//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
//conversão é F (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius

let C = parseFloat(prompt("Digite a temperatura em graus Celsius: "))
let F = (9 * C + 160) / 5;

console.log("Temperatura em Fahrenheit: " + F.toFixed(2) + "°F");