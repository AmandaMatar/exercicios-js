const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

// o resultado vai ser 10 pra qualquer chamada que fizermos, esse é um problema historico do JS