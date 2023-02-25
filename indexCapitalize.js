function capitalize(s, arr) {
    const res = s.split('')
    arr.forEach(i => {
        if (s[i])
            res[i] = s[i].toUpperCase()
    });
    return res.join('')

};
console.log('capitalize("abcdef")', capitalize("abcdef", [1, 2, 5]))