function analisarDesempenho(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(' ').map(Number);
    let melhorPontuacao = pontuacoesArray[0];
    let piorPontuacao = pontuacoesArray[0];
    let recordes = 0;
    let piorJogo = 0;

    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > melhorPontuacao) {
            melhorPontuacao = pontuacoesArray[i];
            recordes++;
        }
        if (pontuacoesArray[i] < piorPontuacao) {
            piorPontuacao = pontuacoesArray[i];
            piorJogo = i + 1; 
        }
    }

    return [recordes, piorJogo];
}

const pontuacoes = "10 20 20 8 25 3 0 30";
console.log(analisarDesempenho(pontuacoes)); 
