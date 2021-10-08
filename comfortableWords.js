const comfortableWords = (word)=>{
    let right=['y', 'u', 'i', 'o', 'p', 'h', 'j','k', 'l', 'n', 'm'];
    let left=['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let arr=[];
    if (right.includes(word[0])){
    word.split('').map((v,i,a)=>{
    if (i%2===0){
      if (right.includes(v)){arr.push(true)}
      else{ arr.push(false)}}
    if (i%2!==0){
      if (left.includes(v)){arr.push(true)}
      else{ arr.push(false)}
    }})}
    if (left.includes(word[0])){
    word.split('').map((v,i,a)=>{
    if (i%2!==0){
      if (right.includes(v)){arr.push(true)}
      else{arr.push(false)}
    }
    if (i%2===0){
      if (left.includes(v)){arr.push(true)}
      else{ arr.push(false)}
    }})}
    return arr.every(v=>v===true)
}

console.log(comfortableWords('yams'))