// Armazenando uma função dentro de uma variável

const imprrimirSoma = function (a, b) {
    console.log(a + b);
}

imprrimirSoma(2, 3)

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

// retorno implicito

const subtracao = (a, b) => a - b // possivel quando temos apenas 1 linha de código
console.log(subtracao(2, 3));

const imprimir2  = a => console.log(a);
imprimir2('Legal!!!')