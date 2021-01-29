function repeatStr (n, s) {
    let i = 0
    str = ''
    while(i < n){
        str += s
        i++
    }
    return str
    //
    // return s.repeat(n);
}

console.log(repeatStr(3, '*'));