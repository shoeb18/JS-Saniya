// alert, prompt and confirm in js

alert("Hey this is harmfull for your device")

let a = prompt("Enter a value", 444)
document.write(a)
a = Number.parseInt(a)
alert("please a of type is " + (typeof a))

 let write = confirm("You want to delete this post")
if (write) {
document.write(a)
}
else {
    document.write("please allow me to delete this post")
}