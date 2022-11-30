
let a = Math.floor(Math.random() * 100)+ 1; 
let input;

do{
    
    input = prompt("Guess The Number?")
    if (input > a) {
        alert("Lesser Number")
    }
    else if (input < a) {
        alert("Bigger Number")
    }
    if (input == a) {
        alert("You have entered a correct Number!")
    }

} while(input!=a)