// Synchronous Programming
// let a = prompt("what is your name?")
// let b = prompt("what is your age?")
// let c = prompt("what is your favourite color?")
// console.log(a + " is " + b + " Years old and her favourite color is " + c + "!!");
// ek ke baad ek exicute hone ko syncronous progaramming kehte hai

// Asynchronous Programming
// console.log("start");
// setTimeout(function () {
//     console.log("Hey how are you")
// }, 3000)
// console.log("End")
//Asynchronous programming means kuch time baad exicute hona matlab iska time jab complete hojayga tab ye excute hojayga aur iska baad ya iske pehle ka jo bhi code hoga sab exicute hojayga baad me ye exicute hoga

//callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("loaded script with src: " + src);
        callback(src);
    }
    script.onerror = function () {
        console.log("Error loading script with src: " + src)
    }
    document.body.appendChild(script);
}
    function hello() {
        alert("Hello")
    }
    function goodmorning() {
        alert("goodmorning")
    }

loadScript("https://whatsapp.com", hello)
// agar Error aya to hum kuch action perorm kar sakte