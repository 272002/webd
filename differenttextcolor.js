function line() {
    var a = document.getElementById("txt").value;
    console.log(a)
    console.log(a.length)

    
    a.addEventListener("\n", function () {
        randomBgColor();
    })



    function randomBgColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        console.log(bgColor);
        document.getElementById("txt").style.color = bgColor;

    }
}
