function comp(array1, array2){
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    
    array1.unshift(array1.pop())
    array1.sort((a,b)=> a-b)
    array2.sort((a,b)=> a-b)
    let result = []  
    for(let i= 0; i< array1.length; i++){
        Math.pow(array1[i],2) == array2[i] ? result.push('true') : result.push('false') 
    }
    return result.includes('false') ? false : true
}

// const comp = (a1, a2) => {
//     if (!a1 || !a2 || a1.length !== a2.length) return false;
//     return a1.map(x => x * x).sort().toString() === a2.sort().toString();
//   }
a1 = [7, 2, 8, 2, 4, 0, 6, 1, 8, 9, 4];
a2 = [64, 4, 1, 81, 37, 4, 0, 16, 49, 64, 16]
console.log(comp(a1, a2));