function removeChar(str){
    // let arr = str.split("");
    // arr.pop()
    // arr.shift()
    // return arr.join('')

    // slice(start end)
    return str.slice(1, -1);
};
   
console.log(removeChar('eloquent'));   
   
   