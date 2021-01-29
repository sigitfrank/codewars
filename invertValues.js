function invert(array) {
    let newArray = []
   array.forEach((element, index) => {
       (Math.sign(element) == -1) ? newArray[index] = Math.abs(element) : newArray[index] = `-${element}`
       
   });
   return newArray.map((a)=>+a)
}

console.log(invert([1,2,3,4,5]))