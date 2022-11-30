//? Attributes in js
let a = first.getAttribute("class")
console.log(a)
// getAttribute se pta chal jayga ke us attribute ki value kya hai class ke andar value hey hai to hey print hojayga

console.log(first.hasAttribute("class"));
// first ke andar class naam ka attribute hai isliye true return karge

console.log(first.hasAttribute("style"));
// first ke andar style naam ka attribute nhi hai isliye false return karega

first.setAttribute("game", "Ori")
// class name ka ek attribute ban jayga aur uski valur ori hojaygi.

first.removeAttribute("game")
// so game naam ka attribute remove hojayga

// console.log(first.getAttributes);
// so hume iske sare arttribute print hoke mil jayge

console.log(first.dataset); //dono mil jayge game ori aur player saniya
console.log(first.dataset.game);  // sirf game ka name
console.log(first.dataset.player); // sifr player ka name mil jayga



 