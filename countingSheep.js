function countSheeps(arrayOfSheep) {
    let sum = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep)
            sum+=1
    });
    return sum
  }

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

    console.log(countSheeps(array1));