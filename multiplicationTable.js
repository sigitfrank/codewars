function multiTable(number) {
    let output = ''
    for(let i = 1; i <= 10; i++){
        output += `${i} * ${number} = ${(i)*number}\n`
      }
    return output.slice(0,-1)
}
console.log(multiTable(5))