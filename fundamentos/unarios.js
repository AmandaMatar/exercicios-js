let num1 = 1
let num2 = 2

// os sinais podem vir antes ou depois da variavel

num1++
console.log(num1);

--num1
console.log(num1);

console.log(++num1 === num2--); // da true pq o ++ é executado antes da comparação e o -- depois da comparação
console.log(num1 === num2);