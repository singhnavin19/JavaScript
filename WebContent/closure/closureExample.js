console.log("-----------closure start------");

function fooTimeOut(){
    var bar=0;
    setTimeout(function(){
        console.log(bar++);
    },2000)
    setTimeout(function(){
        console.log(bar++);
    },3000)
    console.log("last "+bar)
}
// fooTimeOut();

console.log("---------loop Example----");

for(var i=1;i<=5;i++){
    // console.log(i);
    (function(i){
        setTimeout(function(){console.log("i is :- "+i)},i*1000);
    })(i);
}
console.log("outside "+i);

console.group("----IS it Closure start--");
var fooNotClosure=(function(){
    var o={bar:"bar"};
    return {obj:o};
})();
console.log(fooNotClosure.obj.bar);
console.group("----IS it Closure End--");
