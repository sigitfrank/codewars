const orderedCount = function (text) {
    if (!text) return []

    const arrText = text.split('')

    const uniqueChar = [...new Set(arrText)]
    const results = uniqueChar.map(char => {
        const totalChar = arrText.filter(t => t === char).length
        return [char, totalChar]
    })

    return results
}

console.log(orderedCount('abracadabra'))