// array methods map ,filter and reduce
// but in methods me sbko variables banana important hai
let a = [2,3,4,5,6]

let arr= a.map((value , index , array) => {
    console.log(value, index, array);
    return value + 1
})
console.log(arr);
// map method se value index array tino mil jayge.

let b = [1,3,2,4,5,8,9]
let fill = b.filter((a) => {
    return a<8
})
console.log(fill);
// filter method 8 se chote sab characters print kar dega



let c = [3, 3, 2, 4, 1, 2]
let rdc = c.reduce((a, b) => {
    return a + b
})
console.log(rdc);
// reduce method ek single value return karega