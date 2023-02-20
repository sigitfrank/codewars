function selReverse(array, length) {
    if (!length) return array

    const reversed = (arrValue) => {
        const newArray = [];
        for (let i = arrValue.length - 1; i >= 0; i--) {
            newArray.push(arrValue[i])
        }
        return newArray
    }

    if (length > array.length) return reversed(array)

    const totalSplit = Math.ceil(array.length / length)

    const tempArr = []
    for (let j = 0; j < totalSplit; j++) {
        const splitArr = array.slice(length * j, (length * j + length))
        tempArr.push(...reversed(splitArr))
    }
    return tempArr
}

console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3))