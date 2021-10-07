const myEach = function(collections, callback) {
    let arr
    if (typeof collections === 'object') {
        arr = Object.values(collections)
    } else {
        arr = collections
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
    return collections
}

const myMap = function(collections, callback) {
    let arr
    if (typeof collections === 'object') {
        arr = Object.values(collections)
    } else {
        arr = collections
    }
    let res = []
    arr.forEach(element => {
        res.push(callback(element))
    })
    return res
}

const myReduce = function(collections, callback, acc) {
    let arr
    if (typeof collections === 'object') {
        arr = Object.values(collections)
    } else {
        arr = collections
    }
    let start
    if (acc) {
        start = 0
    } else {
        acc = arr[0]
        start = 1
    }
    for (let i = start; i < arr.length; i++) {
        acc = callback(acc,arr[i],collections)
    }
    return acc
}

const myFind = function(collections, predicate) {
    let arr
    if (typeof collections === 'object') {
        arr = Object.values(collections)
    } else {
        arr = collections
    }
    for (let i = 0; i < arr.length; i++) {
        if(predicate(arr[i])){
            return arr[i]
        }
    }
    return undefined
}

const myFilter = function(collections, predicate) {
    let arr
    if (typeof collections === 'object') {
        arr = Object.values(collections)
    } else {
        arr = collections
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(predicate(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

const mySize = function(collections) {
    if (typeof collections === 'object') {
        return Object.values(collections).length
    } else {
        return collections.length
    }
}

const myFirst = function(arr, n) {
    if (n) {
        return arr.slice(0,n)
    } else {
        return arr[0]
    }
}

const myLast = function(arr, n) {
    if (n) {
        return arr.slice(-3)
    } else {
        return arr.slice(-1)[0]
    }
}