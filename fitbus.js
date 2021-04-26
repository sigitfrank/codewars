function enough(cap, on, wait) {
    const fit = on + wait;
    if(cap >= fit) return 0

    return Math.abs(cap-on-wait)
}

console.log(enough(20, 5, 5));