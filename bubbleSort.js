let bubbleSort = (inputArr) => {
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]]
            }
        }
    }
    return inputArr;
};

console.log(bubbleSort([5, 2, 8, 12, 83, 5, 1, 8]))