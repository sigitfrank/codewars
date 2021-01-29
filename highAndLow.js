function highAndLow(numbers){
    const sorted = numbers.split(' ').sort((a,b) => a-b ) 
    return sorted[sorted.length-1] + ' ' + sorted[0]

  }

  console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));