const removeConsecutiveDuplicates = s => {
    const res = []
    if (!s) return ''
    let sArr = s.split(' ')
    sArr.map((w, i) => {
        if (sArr[i - 1] !== sArr[i]) res.push(w)
    }).join(' ')
    return res.join(' ')
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))