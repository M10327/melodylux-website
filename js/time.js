function updateTime() {
    var date = new Date();
    var month = date.toLocaleString('default', { month: 'short' });

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    document.getElementById('current-time').innerHTML =
        minTwoDigits(hour) + ":" + minTwoDigits(minute) + ":" + minTwoDigits(second) + "<br>" +
        month + " " + date.getDate() + " 1999";

    requestAnimationFrame(updateTime);
}

window.addEventListener('load', updateTime, false);



function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}