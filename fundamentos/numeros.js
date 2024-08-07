const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// usamos o isInteger para verificar se essa constante é um numero inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);

// toString() devolve o valor original que está marcado no valor da media.
// para transformar o valor da media em binario basta acrescer 2 ao toString(2)
// usamos o .toFixed() para fixar o numero de casas decimais que desejamos que seja mostrada.