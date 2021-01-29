function digitize(n) {
  return `${n}`.split('').reverse().map(x=>+x)
}

console.log(digitize(35231))