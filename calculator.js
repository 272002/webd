function view(num){
    document.getElementById("result").value+=num
}
function slice(){
    let s=document.getElementById("result").value
    let t=s.slice(0,-1)
    document.getElementById("result").value = t
}

function compute(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr(){
    document.getElementById("result").value=""
}