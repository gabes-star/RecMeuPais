function primeiroEUltimo(arr) {
    if(arr.length === 0) {
        return[]
    }
    else {
        return [arr[0], arr [arr.length - 1]] 
    }
}

console.log(primeiroEUltimo([74, 65, 'brenda', 652368, 'come']))