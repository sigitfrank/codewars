const reverseSeq = n => {
  let arr = []
  let a=1
  for(i=0; i<n; i++){
    arr[i] = a++
  }
  return arr.reverse()
};

console.log(reverseSeq(5));