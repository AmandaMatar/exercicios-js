let valor  // não inicializada
console.log(valor); // tem o valor undefined por padrão porque não atribuimos nada para essa variável

// null significa que se você tem uma variável ela não está apontando para nenhum endereço de memória
valor = null // quer dizer uma ausência de valor(nao aponta pra nenhum endereço de memória)
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// se voce quiser tirar o atributo de um objeto voce usa:
// delete produto.preco
console.log(produto);

produto.preco = null // como se você quisesse dizer esse produto está sem preço
console.log(!!produto.preco);
console.log(produto);