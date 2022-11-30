
 let arr1 = [1,2,3,4,5,6]
// let arr2 = [11,12,13,14,15,16]
// let arr3 = [21, 22, 23, 24, 25, 26]

// console.log(arr1.length);
// console.log(arr1[1]);
// finding index
// delete arr1[5]
// console.log(arr1);
// console.log(arr1.length);


// let newarray = arr1.concat(arr2,arr3)
// console.log(newarray);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// join all arrays

// sort method

const compare =  (a,b) => {
    return a - b
}

let sort = [4500, 67,34,22000,14,34,43]
sort.sort(compare)
// console.log(sort);
// sort alphabetically works
// compare assending order

// sort.reverse()
// console.log(sort);
// array ko ulta kar dega

 let spl = [1,2,33,44,55]
 let deletedvalues = spl.splice(2, 2, 99,91,)
console.log(deletedvalues);
 
let slice = arr1.slice(2)
// console.log(slice);

let slices = arr1.slice(1,4)
// console.log(slices);
// without variable banaye kaam nhi karta ye