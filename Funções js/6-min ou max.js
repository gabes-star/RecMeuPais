function minOuMax (number, min, max, inclusive = false ){
    if (inclusive) { 
        return number >= min && number <= max
    }
    else{
        return number > min && number < max 
    }
}

console.log(minOuMax(8, 6, 1))
console.log(minOuMax(4, 3, 7, true))
console.log(minOuMax(15, 10, 5, true))