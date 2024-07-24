const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x == 5) {
        break // não age sob o if e sim nesse caso ao for
    }
    console.log(`${x} = ${nums[x]}`);
} 

for(y in nums) {
    if(y == 5) {
        continue // pula o indice 5 e continua 
    }
    console.log(`${y} = ${nums[y]}`);
}