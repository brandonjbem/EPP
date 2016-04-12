var d = new Date();
var day = d.getDay();
var hour = d.getHours();
var minutes = d.getMinutes();

window.onload = function() {
    shopOpenFunction();
};

function shopOpenFunction() {
    var monday = document.getElementById("monday");
    var tuesday = document.getElementById("tuesday");
    var wednesday = document.getElementById("wednesday");
    var thursday = document.getElementById("thursday");
    var friday = document.getElementById("friday");
    var saturday = document.getElementById("saturday");
    var sunday = document.getElementById("sunday");
    var datetime = hour.toString() + minutes.toString();
    
    if (minutes < 10) {
        datetime = hour.toString() + ("0" + minutes)
    } if (day == 0) {
        sunday.style.color = "red"
        sunday.style.fontSize = "16px"
        sunday.style.fontWeight = "bold"
    } if (day == 1) {
        monday.style.fontSize = "16px"
        monday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1830) {
            monday.style.color = "green"
        } else {
            monday.style.color = "red"
        }
    } if (day == 2) {
        tuesday.style.fontSize = "16px"
        tuesday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1830) {
            tuesday.style.color = "green"
        } else {
            tuesday.style.color = "red"
        }
    } if (day == 3) {
        wednesday.style.fontSize = "16px"
        wednesday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1830) {
            wednesday.style.color = "green"
        } else {
            wednesday.style.color = "red"
        }
    } if (day == 4) {
        thursday.style.fontSize = "16px"
        thursday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1830) {
            thursday.style.color = "green"
        } else {
            thursday.style.color = "red"
        }
    } if (day == 5) {
        friday.style.fontSize = "16px"
        friday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1830) {
            friday.style.color = "green"
        } else {
            friday.style.color = "red"
        }
    } if (day == 6) {
        saturday.style.fontSize = "16px"
        saturday.style.fontWeight = "bold"
        if (datetime >= 830 && datetime < 1730) {
            saturday.style.color = "green"
        } else {
            saturday.style.color = "red"
        }
    }
}

