console.log(Math.ceil(6.1)); // ceil ou flor para arredondar, pra cima ou pra baixo

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome // this. cria um atributo publico basicamente
    this.exec = function() {  // também pode criar funções publicas
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()