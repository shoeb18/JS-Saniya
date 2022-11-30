 first.className = "text-black red"
//so yellow class ka name hat jayga aur class ka name change ho kar text-black red hojayga

 first.classList.add("blue")
//ye class bhi add hojaygi

 first.classList.remove("red")
// class me se red name ki class nikal jaygi

console.log(first.classList);
// puri classes mil jaygi

first.classList.toggle("red")
 // toggle lagi hai to hata dega hati hai to laga dega true or false

console.log(first.classList.contains("red"))
 // ye class hai isliye true return karega.