function strCount(str, letter) {
    let count = 0
    if (!str) return count
    str.split('').forEach(s => {
        if (s.toLowerCase() === letter) count++
    });
    return count
}

console.log(strCount('hello', 'l'))