function makeNegative(num) {
    return Math.sign(num) == -1 ? num : (num * -1)
  }

  console.log(makeNegative(-12));