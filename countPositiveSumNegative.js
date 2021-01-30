function countPositivesSumNegatives(input) {
    let arr = []
    if(input && input.length > 0){
      let postive = 0, negative = 0
      input.forEach((i) => {
          i > 0 ? postive +=1 : negative+=i
      });
      
      arr[0] = postive
      arr[1] = negative
      
    } else{
      arr = []
    }
    return arr
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));