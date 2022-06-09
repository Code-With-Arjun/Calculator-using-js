let a=document.getElementById("input-text");
function demo(x){
a.value+=x;
}
function demoResult(){
let r=eval(a.value);
a.value=r;
}
function demoClear(){
    a.value="";
}
