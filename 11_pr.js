let a = 4;
let b = 5;
let c = 6;
function oneplusAvg(x,y) {
    console.log("Ok")     // change one time or reflect everytime
    return 1 + (x + y) / 2
}
console.log("The one plus Avarage of A and B is : ", oneplusAvg(a,b));
console.log("The one plus Avarage of B and c is : ", oneplusAvg(b,c));
console.log("The one plus Avarage of A and c is : ", oneplusAvg(a,c));
// console.log("The one plus Avarage of A and B is :",  1 + (a+b)/2);
// same as


const hello = () => {
    console.log("Hey how are you ? I am toh fine yaar!")
    return "Hii"
}
let hii = hello();
console.log(hii)



const sum =(p,q) => {
    return p + q ;
}
console.log(sum(6,6))