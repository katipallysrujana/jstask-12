//write block scope examples, function scope example, global scope examples

//block sscope
{
    const a=10;
    let a1=200;
    console.log(a+a1)
}

//global scope

var a="katipally";
var b="srujana";
console.log(a.concat(b))

//function scope

function a22(){
    var a=20;
    var b=40;
    var c=a+b;
    console.log(c)
}
a22()