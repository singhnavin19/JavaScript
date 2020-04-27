function a(){
    console.log("Inside function a");
    b();
    console.log("termination of function a");
}

function b(){
    console.log("inside function b")
    c();
    console.log("termination of  function b")
}

function c(){
    console.log("inside function c");
    console.log("termination function c");
    
}
a();
