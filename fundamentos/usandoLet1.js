var numero = 1 // como estão em escopos diferente os dois valores poderão coexistir
{
    let numero = 2
    console.log('dentro =', numero);
}

console.log('fora =', numero);