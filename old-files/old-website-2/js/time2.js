function updateTime() {
    var date = new Date();
	var month = date.toLocaleString('default', { month: 'short' });
	
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

    document.getElementById('error-time').innerHTML = 
		"<font color='#ffffff'> A FATAL EXCEPTION HAS OCCURRED AT " + minTwoDigits(hour) + ":" + minTwoDigits(minute) + ":" + minTwoDigits(second) + " " +
		dayOfWeekAsString(date.getDay()) + " " + month + " " + date.getDate() + " " + date.getFullYear() + "</font>";

}

// Start the time updates
window.onload = function() {
    updateTime();
};

function dayOfWeekAsString(dayIndex) {
  return ["SUN", "MON","TUE","WED","THU","FRI","SAT"][dayIndex] || '';
}

function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}