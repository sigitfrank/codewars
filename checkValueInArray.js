function check(a, x) {
    let val = []
  if(a){
    a.forEach((element, index) => {
        if(element==x)
            val[index] = true
    });
  }
  if(val.includes(true))
    return true
  return false
//   const check = (a,x) => a.includes(x);
}

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));