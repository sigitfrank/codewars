function findNextSquare(sq) {
    const num = Math.sqrt(sq)
    if(num % 1 != 0)
        return -1
    return Math.pow((Math.sqrt(sq) + 1), 2)
}

console.log(findNextSquare(12))