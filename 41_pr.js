let first = document.body
console.log(document.getElementsByTagName("div")[0]);
// div ka pura element print hojayga

console.dir(document.getElementsByTagName("div")[0]);
// ye console.dir as an object div ko dega aur uske functions ko bhi aur uski properties

console.log(document.body.firstChild.nodeName)
// iske nodename text print hoga

console.log(document.body.firstElementChild.nodeName)
// aur isme div print hoga because ye firstelementchild hai

// first.innerHTML = "<i>hey i am i am inner html</i>" // we can set html
// console.log(first.innerHTML); // or we can get html 

// first.outerHTML= "<i>i am outerhtml</i>" // we can set html
// console.log(first.outerHTML); // or we can get html aur element bhi jayga
// both are only for elements nodes
// aur jis '# ' ya '.' par lagaoge uski pehle wali html hat jaygi aur ye insert ho jaygi.

console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodevalue);
// same content milega first child krne par agar textnode hoga to wo ya comment node hoga to wo milega.

console.log(document.body.textContent);
// as a text we can copy full page.

first.hidden = true // false
// hidden true kardege to kuch nhi dikhega content but false kardiye to dikhegi