const prod1 = {} // os objetos no js podem ser criados de forma dinamica
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // podemos dar o nome separado, não é uma boa prática
console.log(prod1);

// criando chave/valor dentro do próprio objeto

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);

// isso não é a mesma coisa que json - é um tipo textual