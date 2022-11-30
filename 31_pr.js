//? chapter_7 walking the Dom
// 1.text nodes
// 2.comment nodes
// 3.element nodes

// text nodes gap hota hain
// aur comment nodes jaha par comment ki ho humne
// aur element nodes means tags ho.

// <span>hello world</div>
// so ye auto correct hokar Dom me iska closing tag span hi batayga.

console.log(document.body)
// body return karega

console.log(document.head)
// body return karega

console.log(document.documentElement)
// Html page return karega

console.log(document)
// document return karega

console.log(document.title)
console.log(typeof document.title)
// so title would always return a string
