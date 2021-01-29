function openOrSenior(data){
    let members = []
    data.forEach((element, index) => element[0] >= 55 && element[1] > 7 ? members[index] = 'Senior' :members[index] = 'Open');
    return members
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);