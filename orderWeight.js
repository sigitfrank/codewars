function orderWeight(strng) {
    let newArr = []
    const newString = strng.split(' ')
    console.log(newString);
    newString.forEach((e,i) => {
        newArr[i] = e.split('').reduce((a,b)=>{
            return parseInt(a) + parseInt(b)
        },0)
    });
    return newArr
    
}

console.log(orderWeight("103 123 4444 99 2000"));