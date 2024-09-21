function inverterObjetos(obj) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[obj[key]] = key
      return acc
    }, {})
  }
  
console.log(inverterObjetos({1: 'p', 2: 'a', 3: 'd', 4: 'o'}))