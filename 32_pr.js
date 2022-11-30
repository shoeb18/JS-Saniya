// Dom manipulations //
// console.log(document.body.firstChild)
// so empty space hai isliye text node print hoga

// console.log(document.body.firstChild)
// aut space hatane par div tag print hoga.

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

/*let cn = document.body.childNodes[0]
console.log(cn);
// but ye sabko access karega childnodes aur firstchild only one ko

//childnodes[0] ya firstchild ek hi baat hai
//childnodes[0] ya firstchild ek hi baat hai
let fcn = document.body.firstChild
console.log(fcn);*/

let arr = Array.from(document.body.childNodes)
console.log(arr);
// to ye ek array me convert hojayga.
// and childnodes lookes like an array but its not actually an array but  a collection .we can use Array.from(collection) to convert into an array.
