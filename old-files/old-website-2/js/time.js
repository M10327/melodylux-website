function updateTime() {
    var date = new Date();
	var month = date.toLocaleString('default', { month: 'short' });
	
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

    document.getElementById('current-time').innerHTML = 
		minTwoDigits(hour) + ":" + minTwoDigits(minute) + ":" + minTwoDigits(second) + "<br>" +
		dayOfWeekAsString(date.getDay()) + " " + month + " " + date.getDate() + " " + date.getFullYear();

    // Call requestAnimationFrame again to keep the time updated
    requestAnimationFrame(updateTime);
}

window.addEventListener('load', updateTime, false); 

function dayOfWeekAsString(dayIndex) {
  return ["SUN", "MON","TUE","WED","THU","FRI","SAT"][dayIndex] || '';
}

function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}