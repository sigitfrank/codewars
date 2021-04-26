function squareDigits(num){
    let sum = []
    num.toString().split('').forEach((n,i) => {
        sum[i]= Math.pow(parseInt(n), 2) 
    });
    return parseInt(sum.join(''))
}

console.log(squareDigits(9119));