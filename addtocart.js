
function add(){
    var a = document.getElementById("num").value;
    a = parseInt(a);
    a = a+1;
    document.getElementById("num").value=parseInt(a);
}
function sub(){
    var a = document.getElementById("num").value;
    a = a-1;
    a = parseInt(a);
    if(a>=1){
    document.getElementById("num").value=parseInt(a);
}
else{
    document.getElementById("num").value=parseInt(0);
}
}