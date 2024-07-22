let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); // colocar  o ponto de ! faz com que o valor numerico seja valor booleano

console.log('os verdadeiros...'); // casos em que os valores são true automaticamente
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!! []);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...'); // casos em que os valores são false automaticamente
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 ||  ' ')); // o OU serve muito para dar um valor padrão para a variavel

// exemplo
let nome = ''
console.log(nome || 'Desconhecido');