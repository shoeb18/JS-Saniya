let id1 = document.getElementById("id1")
console.log(id1);
let id2 = document.getElementById("id2")
console.log(id2);

console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
// matches means id1 me .class hai is name ki class hai kya to nhi hai isliye false ayga aur id1 me .box name ki class mojud hai isliye true return karega.

console.log(sp1.closest("#sp1"));
// ye element khudhi return hojayga 

console.log(id1.contains(sp1));
// to ye true return karega because id1 ke andar sp1 hai

console.log(sp1.contains(id1));
// to ye false return karega because sp1 me id1 nhi hai id1 me sp1 hai

console.log(sp1.contains(sp1));
// to ye bhi true return karega because sp1 sp1 hai