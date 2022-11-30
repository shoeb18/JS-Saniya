//chapter.7 practice set
// practice problem no.1
// let color = document.getElementsByTagName("li")[0]
// color.style.color = "red"

// practice problem no.2
//agar hum view page source karege to tbody nhi ayga but inspect karge to browser  automatic table ke andar tbody daal dega.

// practice problem no.3
let clrs = document.querySelectorAll(".li")[0]
clrs.style.color = "green"

let clrses = document.querySelectorAll(".li")[2]
clrses.style.color = "green"

// practice problem no.4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan";
});

// practice problem no.5
