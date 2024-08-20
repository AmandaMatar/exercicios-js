// Função em JS e First-Class Object Citizens
// Higher-order function

// Primeiro exemplo - declarar uma função de forma literal
function fun1() { }

// Armazenar uma função em uma variável
const fun2 = function() {}

// Armazenar uma função dentro de um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3));

// Armazenar função dentro de atributos de objetos
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar());

// Passar função como parâmetros
function run(fun) {
    fun()
}
run(function() {console.log('Executando...');})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4)
