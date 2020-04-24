/*A function definition (also called a function declaration, or function statement) 

1. consists of the function keyword, followed by:
2. The name of the function.
3. A list of parameters to the function, enclosed in parentheses and separated by commas.
4. The JavaScript statements that define the function, enclosed in curly brackets, {...}.

*/

//pass by value function primitive data type 
function sayHello(){
    alert("hello Function");

}

//pass by refrence 
/*If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter 
   and the function changes the object's properties, that change is visible outside the function, 
   as shown in the following example:
*/
testArray={name:"navin",sirname:"singh"};
document.getElementById("input").innerHTML=testArray.name;

function callRefrenceExample(){
    document.getElementById("output").innerHTML='';
    testArray.name="pravin";
    document.getElementById("output").innerHTML=testArray.name;

}
/*Function expressions 
   While the function declaration above is syntactically a statement, 
   functions can also be created by a function expression.

   Such a function can be anonymous; it does not have to have a name. 
   For example, the function square could have been defined as:
*/

var square=function(no){document.getElementById('sqaureResult').innerHTML= no*no;}

function getDecrementedNo(no){
    if(no>0){
        document.getElementById("showDecNo").innerHTML+=no+'<br>';
        no=no-1;
        getDecrementedNo(no);
    }

}










