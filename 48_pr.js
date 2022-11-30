// addEventListener and removeEventListener

let a = function(e) {
    alert("Hello world1!!")
}
btn.addEventListener('click', a)


let b = function (e) {
    alert("Hello world2")
}
btn.addEventListener('click', b)

let p = prompt("What is your favourite number?")
if (p =="2") {
    btn.removeEventListener('click', a)
}
// removeEventListener se event ko hum remove kar sakte aur addeventlistener se hum ek event add kar sakte
