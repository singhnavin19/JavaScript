const testGlobal={
fname:"navin",
lname:"singh"
};
// console.log(testGlobal.fname)

function testGlobalScope(){
    let localVaribale="navin";
    console.log("From Global Varible:-  "+testGlobal.lname);
    console.log("from localVaribale :- "+localVaribale);
    function inner(){
        var innerLocalVarible="singh";
        console.log("inner function local :- "+localVaribale);
        console.log("innerLocalVarible "+innerLocalVarible);
    }
    inner();
    // console.log(innerLocalVarible);
}
// testGlobalScope(); ------------call

var foo="navin";

function baar(){

    var foo="singh";
    console.log("baar :- "+foo);
}

function baz(foo){
    foo="singh";
    console.log("inside baz :- "+foo);
    bam="heeeehee"
    console.log(bam)
}
console.log("start :- "+foo);
baar();
console.log("after baar :- "+foo)
baz();
console.log("at the end:- "+foo)





