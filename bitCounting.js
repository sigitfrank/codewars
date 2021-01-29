let countBits = function(n) {
    if(!n) return 0
    let sum = 0
    n.toString(2).split('').forEach(bin => bin != 0 ? sum++ : '');
    return sum
};

console.log(countBits(4));