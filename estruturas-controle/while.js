function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0


// aqui ele precisa de uma expressão que retorna verdadeiro ou falso 
// enquanto a expressão for verdadeira continue executando o laço até que a expressão fique falsa
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log('Até a próxima!');
