console.log("from gloabal "+this)
let a="hello"
console.log(a);
console.log(this.a)
console.log(window.a)

function add(){
    console.log("from Function "+this)
}
add();


const singh={
    name:"Navin Singh",
    hobby:function(){
        console.log("Music");
        console.log(this);
    }
}
console.log(singh.name);
singh.hobby();

function strict() {
    'use strict';
    console.log(this)
  }
strict();