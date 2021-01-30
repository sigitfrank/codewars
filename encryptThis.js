const encryptThis = function(text) {
 
    let strArr = text.split(' ');
    let output = [];
    
    strArr.forEach(str => {
      if (str.length === 1) {
        output.push(str.charCodeAt(0));
      } 
      else {
        let tempStr = str.split('');
        tempStr[0] = str.charCodeAt(0);
        tempStr[1] = str[str.length - 1];
        tempStr[str.length - 1] = str[1];
        output.push(tempStr.join(''));
      }
    });
    
    return output.join(' ');
    // return arr
}

console.log(encryptThis('A wise old owl lived in an oak'));