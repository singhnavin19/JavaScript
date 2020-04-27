function foo(){
    var bar="bar"
    // console.log(bar);
    baz();
}
function baz(){
    console.log(this.bar);
}

var bar="bar1";
foo();


function testFoo(){
    console.log(this.testBar);
}

var testObject={testBar:"Bar1"}

testFoo()
console.log(testObject.testBar);

