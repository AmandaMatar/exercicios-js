function classificacaoTriangulo(ladoX, ladoY, ladoZ) {
    if(ladoX === ladoY && ladoY === ladoZ) {
        return "Equilátero"
    } else if(ladoX === ladoY || ladoX === ladoZ || ladoY === ladoZ) {
        return "Isóceles"
    } else {
        return "Escaleno"
    }
}
 
console.log(classificacaoTriangulo(3, 3, 3));
console.log(classificacaoTriangulo(3, 3, 4));
console.log(classificacaoTriangulo(3, 4, 5));