function sumArray(array) {
    
    let sum = 0
    if(array){
        let newArray = array.sort((a,b) => a-b)
        newArray.pop()
        newArray.shift()
        newArray.forEach((element) => {
                sum+=element
        });
    }
    
    return sum
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))