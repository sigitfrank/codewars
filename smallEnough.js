function smallEnough(a, limit){
  let result = []
  a.map( b => {
    result = limit >= b ? [...result, true] :  [...result, false]
  })
  return result.includes(false) ? false : true
}

console.log(smallEnough([101, 45, 75, 105, 99, 107],107))