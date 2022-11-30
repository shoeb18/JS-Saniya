// chapter 5 practice set
// problem number:1
// let arr = [1,2,3,4,5,6,7,8]
// a = prompt("Enter a Number?")
// a= Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// problem number:2
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let a;
do {
    a = prompt("Enter a Number?")
    a = Number.parseInt(a)
    arr.push(a)
}while(a!=0)
console.log(arr)*/

// problem No: 3
let array = [12, 30, 80, 75, 35, 40, 110]
let f = array.filter((a) => {
    return a%10 == 0
})
console.log(f)

//problem No:4
let array2 = [2, 3, 4, 6, 5, 7, 8]
let m = array2.map((a) => {
    return a *a 
})
console.log(m)

//problem No:4
let array3 = [1,2,3,4,5,6]
let r = array3.reduce((a, b) => {
    return a * b
})
console.log(r)