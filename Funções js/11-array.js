function filtrarArrai(arr){
    return arr.filter(element => typeof element === 'number')
}

console.log(filtrarArrai([7, 5, 6 , 8, 'gabi', 'celina', 'sthefanny', 'joy joy', 'sarita']))