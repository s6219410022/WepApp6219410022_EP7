//ตัวแปร Variable
var a = 20;
let x = 100000;
const y = "Hello";

{
    let b = 15;
    var c = 99;
    const d = 8888;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log('-----------------------------');



    b = 30;
    a = 100;
    c = 555
    //d = 11111; ERROR
    console.log(a);
    console.log(b);
    console.log(c);
    console.log('-----------------------------');
}


console.log(x);
console.log(a);
//console.log(b); error
console.log(c);
//console.log(d); error
console.log('------------------------------');