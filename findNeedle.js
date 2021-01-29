function findNeedle(haystack) {
  let result
  haystack.forEach((s, index) => {
     if(s == 'needle')
      result = index
  });
  return `found the needle at position ${result}`
}
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
console.log(findNeedle(haystack_1));