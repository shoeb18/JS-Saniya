let a = document.body
console.log("first child of a is :", a.firstChild);
//we can got textnode aur comment node bhi mil sakta hai 

console.log("first Element child of a is :", a.firstElementChild);
//we can got nav means firstelementchild karne par direct element milega textnode aur comment node nhi milegi chahe hum kitne hi spaces lagade nav hi milega.

let b = document.body.firstElementChild.nextElementSibling
console.log(b);
// we can got script tag

document.body.firstElementChild.style.background = "red"
// same work ye dono ke

// const changebgred = () => {
//     changebgred.style.background = "red"
// }

