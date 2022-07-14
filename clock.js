function currentTime() 
{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";


    if (hh > 12) {
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;


    var din = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    let day = date.getDate();
    let currentDate = din[date.getDay()] + ", " + month[date.getMonth()] + " " + day;
    document.getElementById("date").innerText = currentDate;
    var t = setTimeout(function () { currentTime() }, 1000);

    if (hh < 12) {
        function image() {
            document.getElementById("img").style.backgroundImage = "url('morning.jpg')";
        }
        image();


    }
    if (hh >= 12 && hh < 18) {
        function image() {
            document.getElementById("img").style.backgroundImage = "url('afternoon.jpg')";
        }
        image();

    }

    if (hh >= 18 && hh <= 24) {
        function image() {
            document.getElementById("img").style.backgroundImage = "url('night.jpg')";
        }
        image();

    }
  


}
currentTime();
