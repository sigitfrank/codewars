const numbers = [1, 2, 3, 4, 5];


Array.prototype.square = function (){
    return this.map(number => number*number)
}
Array.prototype.cube = function (){
    return this.map(number => number*number*number)
}
Array.prototype.average = function (){
    return this.reduce((acc, value)=> (acc+value) ,0)/this.length
}
Array.prototype.sum = function (){
    return this.reduce((acc, value)=> (acc+value) ,0)
}

Array.prototype.even = function (){
    return this.filter(number => number % 2 === 0)
}

Array.prototype.odd = function (){
    return this.filter(number => number % 2 !== 0)
}

Array.prototype.square  = function () { 
    return this.map(function(n) { return n*n; }); 
}
