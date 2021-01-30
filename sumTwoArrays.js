function arrayPlusArray(arr1, arr2) {
   let sum = 0
    let array1 = arr1.reduce((a,b)=>{
       return a+b
   })

   let array2 = arr2.reduce((a,b)=>{
       return a+b
   })

   sum = array1 + array2
   
    return sum
    // let arr = [...arr1, ...arr2];
    // return arr.reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))