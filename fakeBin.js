function fakeBin(x){
    const arr = x.split('')
    arr.forEach((element, index) => {
        arr[index] = element < 5 ?  '0' : '1'
        
    });
    return arr.join('')
}

console.log(fakeBin('45385593107843568'))