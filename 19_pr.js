let num = [1,2,3,4,5,6,7]

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

num.forEach(a => {
    console.log(a*a);
});

let myname = "saniya"
let array = Array.from(myname)
console.log(array);
// convert the string into array

for (let i of num) {
    console.log(i);
}

for (let i in num) {
    console.log(num[i]);
}
// ye index return karega
// aur num karke i me square brackets lagane par wahi array return karega.