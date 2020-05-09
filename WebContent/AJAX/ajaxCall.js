console.log("Ajax Call Example");
function fecthAjaxCallData(){
    console.log("fecth Call method");
    //1. instantiate the object
    const xhr=new XMLHttpRequest();
    // xhr.onreadystatechange=function(){
    //     console.log(xhr.readyState);
    // }
    
    //2. open the port 
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    
    //3. on progress 
    xhr.onprogress=function(){
        console.log("pragati means progress");
    }
   //3.1

    //4. on load means after load 
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            str="";
            for (d in obj.data){
                str=str+`<li>${obj.data[d].employee_name}</li>`;
            }
            document.getElementById('dataId').innerHTML=str;
        }
    } 
    //5. final is call 
    xhr.send();
    console.log("done");
}

function loadAjaxCallData(){
    console.log("Load Call method")
}