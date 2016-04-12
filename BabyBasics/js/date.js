var date = new Date();
var year = date.getFullYear()
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();

function todayDate() {

	if(month == 0) {
		document.getElementById("date").innerHTML = "As of January " + year + ", over"
	} if(month == 1) {
		document.getElementById("date").innerHTML = "As of February " + year + ", over"
	} if(month == 2) {
		document.getElementById("date").innerHTML = "As of March " + year + ", over"
	} if(month == 3) {
		document.getElementById("date").innerHTML = "As of April " + year + ", over"
	} if(month == 4) {
		document.getElementById("date").innerHTML = "As of May " + year + ", over"
	} if(month == 5) {
		document.getElementById("date").innerHTML = "As of June " + year + ", over"
	} if(month == 6) {
		document.getElementById("date").innerHTML = "As of July " + year + ", over"
	} if(month == 7) {
		document.getElementById("date").innerHTML = "As of August " + year + ", over"
	} if(month == 8) {
		document.getElementById("date").innerHTML = "As of September " + year + ", over"
	} if(month == 9) {
		document.getElementById("date").innerHTML = "As of October " + year + ", over"
	} if(month == 10) {
		document.getElementById("date").innerHTML = "As of November " + year + ", over"
	} if(month == 11) {
		document.getElementById("date").innerHTML = "As of December " + year + ", over"
	}
}

function diapersDist() {
	var families = 22;
	var diapersPerMonth = 200;
	var total = families * diapersPerMonth;

	document.getElementById("diapers").innerHTML = total
}