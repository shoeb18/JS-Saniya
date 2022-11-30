// if else in js

let age = prompt("what is your age")
age = Number.parseInt(age)
if (age < 0) {
    alert("This is an invalid age")
}
if (age < 20 && age > 10) {
    alert("You are age between 10 or 20 ")
}

else if (age > 20 && age < 30) {
    alert("You are age between 20 or 30 ")
}
else if(age>30 && age<100){
    alert("Your age is Bigger")
}