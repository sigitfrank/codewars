function findOdd(A) {
    let counts = {}
    for(let i =0; i < A.length; i++){ 
        counts[A[i]] ? counts[A[i]] += 1 : counts[A[i]] = 1
    }  
    for (let prop in counts){
        if (counts[prop] >= 1)
            if(counts[prop] % 2 != 0)
                return parseInt(prop)
    }
}

  console.log(findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]))