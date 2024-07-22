// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // essas chaves representam o operador de desestruturação
console.log(nome, idade);

const {nome:n, idade: i} = pessoa
console.log(n, i);

// tirando um atributo que não existe no obj
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado);

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);

