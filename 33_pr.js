// $0 matlab jisme $0 hai wo element hamare pass aajayga.
// $1 matlab jo humne is element se pehle select kiya tha.


//console.log(document.body.firstChild);
 
let a = document.body.firstChild
//console.log(a.parentNode);
// to hamare div ka parent body hai isliye wo print hoke mil jayga 
console.log(a.parentElement);
// ye bhi body hi print karega but parentnode aur parentElement me ye diference hai ki parentelement me only elements ko dekha jayga warna ye null print karega but  parentnode me textnode comment node bhi chalega.

//console.log(a.firstChild.nextSibling);
