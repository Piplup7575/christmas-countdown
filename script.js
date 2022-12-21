/** you can edit the countdown messages below **/
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
var countdownMessage = "Merry Christmas!";
/** you can edit the countdown messages above **/

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('day').innerHTML = "<u>Days</u><br>" + days;
    document.getElementById('hr').innerHTML = "<u>Hours</u><br>" + hours;
    document.getElementById('min').innerHTML = "<u>Minutes</u><br>" + minutes;
    document.getElementById('sec').innerHTML = "<u>Seconds</u><br>" + seconds;
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("happy").innerHTML = countdownMessage;
        document.getElementById("day").innerHTML = "";
        document.getElementById("hr").innerHTML = "";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
    } else {
        document.getElementById("happy").innerHTML = "";
    }
}, 1000);