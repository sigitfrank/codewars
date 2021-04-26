function accum(s) {
    let str = [], newStr = []
    s.split('').forEach((e,n) => {
        if(n==0){
            str[n] += e
        } else{
        for(let i=0; i<n; i++){
            i==0 ? str[n] += e.toUpperCase()+e.toLowerCase() : str[n] += e.toLowerCase()
        }
    }
    })
    str.forEach((e,i) => {
        newStr[i] = e.substring(9)
        
    })
    return newStr.join('-')

    // return s.split('')
    // .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    // .join('-');
}
console.log(accum("ZpglnRxqenU"));