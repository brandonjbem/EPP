var date = new Date();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();

function shopOpenFunction() {
    var hours = document.getElementById("hours");
    var datetime = hour.toString() + minutes.toString();
    
    if (minutes < 10) {
        datetime = hour.toString() + ("0" + minutes)
    } if (day == 0) {
        hours.style.color = "#CC0000"
        hours.innerHTML = "Sunday: CLOSED"
    } if (day == 1) {
        hours.innerHTML = "Monday: 8:30am - 5:00pm"
        if (datetime >= 830 && datetime < 1700) {
            hours.style.color = "#3C763D"
        } else {
            hours.style.color = "#CC0000"
        }
    } if (day == 2) {
        hours.innerHTML = "Tuesday: 8:30am - 5:00pm"
        if (datetime >= 830 && datetime < 1700) {
            hours.style.color = "#3C763D"
        } else {
            hours.style.color = "#CC0000"
        }
    } if (day == 3) {
        hours.innerHTML = "Wednesday: 8:30am - 5:00pm"
        if (datetime >= 830 && datetime < 1700) {
            hours.style.color = "#3C763D"
        } else {
            hours.style.color = "#CC0000"
        }
    } if (day == 4) {
        hours.innerHTML = "Thursday: 8:30am - 5:00pm"
        if (datetime >= 830 && datetime < 1700) {
            hours.style.color = "#3C763D"
        } else {
            hours.style.color = "#CC0000"
        }
    } if (day == 5) {
        hours.innerHTML = "Friday: 8:30am - 5:00pm"
        if (datetime >= 830 && datetime < 1700) {
            hours.style.color = "#3C763D"
        } else {
            hours.style.color = "#CC0000"
        }
    } if (day == 6) {
        hours.innerHTML = "Saturday: CLOSED"
        hours.style.color = "#CC0000"
    }
}