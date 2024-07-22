const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]); // esse indice não existe no array ele nao vai gerar erro vai resultar undefined

valores[4] = 10 // posso adicionar o indice 4, já que ele não tem ainda
console.log(valores);
console.log(valores.length);

// função push para adicionar novos elementos no array
valores.push({id:3}, false, null, 'teste') // pode misturar coisas no array mas não é uma boa prática
console.log(valores);

console.log(valores.pop()); // tira o ultimo valor do array, retorna o valor, mas retira do array
delete valores[0] // outra forma de excluir algum elemento do array
console.log(valores);

console.log(typeof valores);