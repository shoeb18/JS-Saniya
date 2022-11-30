// chapter No 6 
// problem no 1
/*let runagain =true;

let age = prompt("Enter your age?")
age = Number.parseInt(age)
while (age != runagain) {
    if (age < 18) {
        alert("You can not Drive Ever")
    }
    else if (age > 18) {
        alert("You can Drive")
    }

    runagain = confirm("You want to see the prompt Again?")
}*/

/*let runagain =true;
let age;
while (age != runagain) {
    age = prompt("Enter your age?")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("please Enter a valid age")
        break;
    }
    if (age < 18) {
        alert("You can not Drive Ever")
    }
    else if (age > 18) {
        alert("You can Drive")
    }
    runagain = confirm("You want to see the prompt Again?")
}*/

/*let number = 4;

let i = prompt("Enter a number")
i = Number.parseInt(i)

if(i==number){
    location.href= "https://google.com"
}*/

let color= prompt("Enter the page background color")
document.body.style.background = color


