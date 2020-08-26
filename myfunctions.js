function myFunctionA(arr) {
    return arr.slice(0, 1)
}

let array = [1, 2, 3, 4]

console.log(myFunctionA(array))

function firstElement(arr) {
    return arr[0]
}

module.exports.functionOneKey = firstElement

function myFunctionB(arr) {
    arr.pop()
    return arr
}
console.log(myFunctionB(array))

function myFunctionC(arr) {
    return arr.pop()
}
console.log(myFunctionC(array))

array = [1, 2, 3, 4]

function myFunctionD(arr) {
    return arr.slice(1)
}
console.log(myFunctionD(array))

function myFunctionE(arr, n) {
    if (n > 0 && n <= arr.length) {
        return arr[n]
    }
    else {
        return arr[arr.length - 1]
    }
}
array = [1, 2, 3, 4]

console.log(myFunctionE(array, 10))

function myFunctionF(arr, elt) {
    return arr.filter(word => word != elt)
}
array = [1, 2, 3, 4]


console.log(myFunctionF(array, 4))

function myFunctionG(arr) {
    let a = []
    arr.map(elt => {
        if (a.includes(elt) == false) {
            a.push(elt)
        }
    
    })
    return a
}

let newArray = [1, 6, 9, 2, 1, 6, 7, 10]

console.log(myFunctionG(newArray))

function myFunctionH(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return arr.reduce(reducer)
}

newArray=[1,2,3,4]

console.log(myFunctionH(newArray))

function myFunctionI(a, b) {
    let num = Math.floor((Math.random() * b)+1)
    if (num<a) {
        num+=a
    }
    return num
}
console.log(myFunctionI(3, 7))

function myFunctionJ(string) {
    var firstLetter = string.charAt(0)
    var uppercaseFirstLetter = string.charAt(0).toUpperCase()
    var stringWithoutFirstLetter = string.slice(1)
    return uppercaseFirstLetter + stringWithoutFirstLetter
}

const text = 'the cat is sleeping'

console.log(myFunctionJ(text))

function myFunctionK(string) {
        return string.toUpperCase()
}

console.log(myFunctionK(text))

function myFunctionL(a, b) {
    let compare
    if (a.charAt(a.length-1) == b) {
        compare=true
    }
    else compare = false
    
    return compare
}

console.log(myFunctionL('test', 't'))
console.log(myFunctionL('test', 'q'))

module.exports.myFunctionA = myFunctionA
module.exports.myFunctionB = myFunctionB
module.exports.myFunctionC = myFunctionC
module.exports.myFunctionD = myFunctionD
module.exports.myFunctionE = myFunctionE
module.exports.myFunctionF = myFunctionF
module.exports.myFunctionG = myFunctionG
module.exports.myFunctionH = myFunctionH
module.exports.myFunctionI = myFunctionI
module.exports.myFunctionJ = myFunctionJ
module.exports.myFunctionK = myFunctionK
module.exports.myFunctionL = myFunctionL
