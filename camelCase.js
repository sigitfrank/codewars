function toCamelCase(str){
    let newString = []
    let count = 0
    str.split('').forEach((n,i) => {
        if(n == '_' || n == '-'){
            newString[i] = ' '
            count = 1
        } else{
            if(count == 1 && i > 0){
                count++
                newString[i] = n.toUpperCase()
            } else{
                newString[i] = n
            }
        }
    })
    return newString.join('').replace(/\s/g, "")
    
}

console.log(toCamelCase('the_stealth_warrior'));