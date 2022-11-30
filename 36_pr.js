let para1 = document.getElementById("para1")
para1.style.color = "red"

let para2 = document.getElementById("para2")
para2.style.color = "brown"

let para3 = document.getElementById("para3")
para3.style.color = "green"

let btn = document.querySelectorAll(".btn")
btn[0].style.background = "yellow"
btn[1].style.background = "red"
btn[2].style.background = "green"
console.log(btn);

// ek se zyada ko karna raha to queryselectorall karna
// aur sirf single ko hi karna hai to id ka use krna

document.querySelector(".btn").style.color = "red"

document.getElementsByTagName("p")[0].style.color = "blue"

console.log(document.getElementsByTagName("p"));

console.log(document.querySelector(".box").getElementsByTagName("p"));

console.log(document.getElementsbyName("search"));