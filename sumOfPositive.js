function positiveSum(arr) {
    let sum = 0
    arr.reduce((acc, value)=>{
        Math.sign(value) == -1 ? value = 0 : value
        sum += value
    }, 0)
    return sum
}

console.log(positiveSum([1,-2,3,4,5]));