function getAverage(marks){
    
   const mean =  marks.reduce((a,b)=>{
        return a+b/marks.length
    },0)

    return Math.floor(mean)
  }

  console.log(getAverage([1,2,3,4,5]));