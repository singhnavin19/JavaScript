// 'use strict'
console.log("------------Hoisting start here ");
console.log(x);
var x;

y=20;
console.log(y);
var y;
hello();
function hello(){
    console.log("from function :-hello");
}


// -----------plural ssight start here
console.log("--------plural ssight start here------");
function simpleExample(){
    console.log("value of A :- "+a);
    console.log("value of B :- "+b);
    var a=b;
    var b=2;
    console.log("value of A :- "+a);
    console.log("value of B :- "+b);
}
simpleExample();

foo();
var foo=2;
console.log(foo)

function foo(){
    console.log("foo first time declared");
}
function foo(){
    console.log("foo second time declared");
}









