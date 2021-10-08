function narcissistic(value) {
    const convertToSting = String(value)
    const numLength = convertToSting.length
    const splitValue = convertToSting.split('')
    let sum = 0
    splitValue.forEach((val, index)=>{
        sum += val**(numLength)
    })
    return sum === value ? true : false
}
console.log(narcissistic(7))  