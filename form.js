function myemail() {
    var a = document.getElementById("email").value;
    document.getElementById("msg").innerHTML = "";


    if (a.indexOf('@') == 0) {
        document.getElementById("msg").innerHTML = "***Invalid @ position***";
        
    }
    if (a.indexOf('@') >= 1) {
        var b = 'gmail.com'
        document.getElementById("email").value = a.concat(b)
        document.getElementById("msg").innerHTML = "";
    }
    if (a.charAt(a.length - 10) == '@') {
        var b = ''
        document.getElementById("email").value = a.concat(b)
        document.getElementById("msg").innerHTML = "";
    }


}
function mypsd() {
    document.getElementById("msg").innerHTML = "***Enter E-mail***"
    
}
function mytxt() {
    document.getElementById("txt").innerHTML = "***Enter password***"
    
}

function mypassword() {
    var a = document.getElementById("pwd").value;
    var fnam = document.getElementById("fname").value;
    var lnam = document.getElementById("lname").value;
    var unam = document.getElementById("uname").value;
    var p = 0
    var q = 0
    var r = 0
    var s = 0
    var i = 0

    if ((a == fnam) || (a == lnam) || (a == unam)) {
        document.getElementById("txt").innerHTML = "***Invalid Password***"
        
    }

    if (a.length > 6) {

        while (i < 1) {

            for (let j = 0; j < a.length; j++) {
                if (a.charCodeAt(j) >= 97 & a.charCodeAt(j) <= 122) {
                    p = 1  // small symbols
                }
                if (a.charCodeAt(j) >= 65 & a.charCodeAt(j) <= 90) {
                    q = 1  //capital alphabets
                }
                if (a.charCodeAt(j) >= 48 & a.charCodeAt(j) <= 57) {
                    r = 1  // numbers
                }
                if ((a.charCodeAt(j) >= 33 & a.charCodeAt(j) <= 46) || a.charCodeAt(j) == 64) {
                    s = 1  //special symbols
                }
            }
            i = i + 1
        }
        if (((p == 1) || (q == 1)) & (r == 0) & (s == 0)) {
            document.getElementById("txt").innerHTML = "***Weak password***"
           
        }
        if (((p == 1) || (q == 1)) & (r == 1) & (s == 0)) {
            document.getElementById("txt").innerHTML = "***Medium password***"
            
        }

        if ((p == 1) & (q == 1) & (r == 1) & (s == 1)) {
            document.getElementById("txt").innerHTML = "***strong password***"
           
        }
    }
}