var numero = 1
{
    var numero = 2 // essa vai sobrescrever a primeira declaração por ser VAR
    console.log('dentro =', numero);
}

console.log('fora =', numero);