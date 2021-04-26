function getCount(str) {
  let vowelsCount = 0;
  
  str.split('').forEach((e,i) => {
    if(e == 'a')
        vowelsCount +=1
    if(e == 'i')
        vowelsCount +=1
    if(e == 'u')
        vowelsCount +=1
    if(e == 'e')
        vowelsCount +=1
    if(e == 'o')
        vowelsCount +=1
  });
  
  return vowelsCount;
}

console.log(getCount("abracadabra"));