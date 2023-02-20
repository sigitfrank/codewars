var sing = function () {
    const arr = []
    for (let i = 99; i >= 0; i--) {
        let mainLyric = `${i} bottles of beer on the wall, ${i} bottles of beer.`
        let secondLyric = `Take one down and pass it around, ${i - 1} bottle${i > 2 ? 's' : ''} of beer on the wall.`
        if (i === 1) {
            mainLyric = `${i} bottle of beer on the wall, ${i} bottle of beer.`
            secondLyric = `Take one down and pass it around, no more bottles of beer on the wall.`
        }
        if (i === 0) {
            mainLyric = `No more bottles of beer on the wall, no more bottles of beer.`
            secondLyric = `Go to the store and buy some more, 99 bottles of beer on the wall.`
        }
        arr.push(...[mainLyric, secondLyric])
    }
    return arr
};

console.log('sing', sing())