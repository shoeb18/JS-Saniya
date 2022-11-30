let t = document.body.firstElementChild.firstElementChild
console.log(t);
// to hame table print ho jayga

console.log(t.rows);
// to hame html form me table ki saari rows print ho jayga

console.log(t.caption);
// to hame caption print hojayga

console.log(t.tHead);
// to hame table ka head print hojayga

console.log(t.tFoot);
// tfoot karne pe null print hoga because table me tfoot hai hi nhi

console.log(t.rows[0].rowIndex);
//to '0' print hoga hum isse row ki index pta kar sakte jo number daloge wo number ki row hame mil jaygi
