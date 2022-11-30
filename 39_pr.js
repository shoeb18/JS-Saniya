
//! my game snack water and gun.
let con = confirm("Do want to play the?\nsnack \nwater \nGun!! ")
let user = prompt("Enter your charecter here!!")
let comp = Math.floor(Math.random() * 3);
let computer = ["snack", "water", "gun"][comp]

// win for computer
if (computer === user) {
    alert("Tie match")
}
else if (computer === "snack" && user === "water") {
    alert("computer Win!!")
}
else if (computer === "water" && user === "gun") {
    alert("computer Win!!")
}
else if (computer === "gun" && user === "snack") {
    alert("computer Win!!")
}
// win for user
else if (user === "gun" && computer === "snack") {
    alert("congratulations you win!!")
}
else if (user === "snack" && computer === "water") {
    alert("congratulations you win!!")
}
else if (user === "water" && computer === "gun") {
    alert("congratulations you win!!")
}