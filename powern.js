function index(array, n){
    if(array.length < n)
       return -1
    let result
    result = array.map((arr, i) => {
        if(i === n) return Math.pow(arr, n)
    })[n]
    if(result)
        return result
    return -1
  }

  console.log(index([1, 2, 3, 4],2));