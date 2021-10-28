// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// test_00:
// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

const commonArr = []
let hash = {}
for (let i = 0; i< a.length; i++) {
    if (!(a[i] in hash)) {
        hash[a[i]] = true
} 
}

for (let i = 0; i < b.length; i++) {
    if (b[i] in hash) {
        commonArr.push(b[i])
}
}

return commonArr

