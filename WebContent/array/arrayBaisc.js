let a=[1,2,3];
console.log(typeof a);
console.log(a);

// Array Manipulation

let m=[1,2,3,4];
console.log(typeof m);
m.pop();
console.log("m.pop() := "+m);
m.push(4,5,6);
console.log("m.push() := "+m);
m.shift(); //same like pop but first element
console.log("m.shift(2):= "+m);
m.unshift(1);
console.log("m.unshift(1,2):= "+m);
console.log("m.indexOf(2):- "+m.indexOf(2));
console.log("m.filter(function(item){console.log(item)})");
m.filter(function(item){
    console.log(item)
})
console.log("m.find(function(item){console.log(item)})");
m.find(function(item){
    console.log(item)
})
console.log("m.forEach(function(item){console.log(item)})");
m.forEach(function(item){
    console.log(item)
})
console.log(typeof m);
console.log("--------array ENd here");
const arrayTest=document.getElementsByClassName("arrayTest");
console.log(arrayTest[0]);