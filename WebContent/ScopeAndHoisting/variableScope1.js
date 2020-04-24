var foo="navin";

function bar(){
    var foo="singh";
    console.log("inside foo var foo=singh :- " +foo);
    function bam(foo){
        foo="navin";
        console.log("inside bam foo= navin:- " +foo);
        hehe="heheee";
        console.log("inside bam :-"+hehe);
    }
   bam();
}


console.log("start here :-"+foo);
bar();
console.log("After bar execution of foo:-  "+foo);
// bam();
console.log("bam value :- "+hehe);
