var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds === 1) {
        document.getElementById('countdown').innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " second ";
    } else {
        document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds ";
    }
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Merry Christmas!";
    }
}, 1000);