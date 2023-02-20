function collatzConjecture(n) {
    let counter = 0;
    if (n > 0 && Number.isInteger(n)) {
        while (n !== 1) {
            const isEven = n % 2 === 0
            const isOdd = n % 2 !== 0
            if (isEven) {
                n = n / 2;
                counter++;
            } else if (isOdd) {
                n = (n * 3) + 1;
                counter++;
            }
        }
        return counter;
    }
}
console.log(collatzConjecture(7))