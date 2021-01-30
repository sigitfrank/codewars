function find_average(array) {
  const avg =array.reduce((a,b)=>{
    return a+b/array.length
  },0)
  return avg
}
console.log(find_average([1,2,3]))