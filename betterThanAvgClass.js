function betterThanAverage(classPoints, yourPoints) {
  const avg = classPoints.reduce((a,b)=>{
    return a+b/classPoints.length
  },0)
  return yourPoints > avg ? true : false
}

console.log(betterThanAverage([2, 3], 5));