const escola = "Cod3r"

console.log(escola.charAt(4)); // aqui significa que ele vai dar a letra que esta no indice 4
console.log(escola.charCodeAt(3)); // tabela asc ou tabela unicode
console.log(escola.indexOf('3')); // o contrario do anterior
console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // vai ate o indice 3 mas nao inclui ele
console.log('Escola '.concat(escola).concat('!')); // concatenação
console.log(escola.replace(3, 'e')); //substituir caractere
console.log(escola.replace(/\d/, 'e')); // esse 'd' é uma expressão regular substitui numero pelo 'e'
console.log(escola.replace(/\w/g, 'e')); // substitui tudo por 'e'
console.log('Ana,Maria,Pedro'.split(',')); // converter essa string em array 