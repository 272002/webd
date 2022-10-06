function check(){
    var a = document.getElementById("text").value;
    var b = document.getElementById("txt").value;
    var count1 = 0;
    for(let i =0 ;i<a.length;i++){
        if(a[i]==b[0]){
            if(a[i+1]==b[1]){
                count1 = count1 +1;
            }
        }
        if(a[i]==b[1]){
            if(a[i+1]==b[0]){
                count1 = count1 +1;
            }
        }
    }
    document.getElementById("spn").value = count1;
    console.log(count1);

}