function sumCubes(n){
    if(n === 1) return n
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += (i**3)
    }
    return sum
}

console.log(sumCubes(3))