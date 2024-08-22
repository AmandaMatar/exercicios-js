function calcularMontanteJurosSimples(capital, taxa, tempo) {
    let montante = capital * (1 + taxa * tempo)
    return montante
}

function calcularMontanteJurosCompostos(capital, taxa, tempo) {
    let montante = capital * Math.pow((1 + taxa), tempo)
    return montante
}

let capital = 1000
let taxa = 0.25
let tempo = 2

let montanteSimples = calcularMontanteJurosSimples(capital, taxa, tempo)
let montanteCompostos = calcularMontanteJurosCompostos(capital, taxa, tempo)

console.log(`Montante com juros simples: R$ ${montanteSimples.toFixed(2)}`);
console.log(`Montante com juros compostos: R$ ${montanteCompostos.toFixed(2)}`);