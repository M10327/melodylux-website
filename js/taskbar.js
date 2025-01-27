

var taskbarButtons = document.getElementsByClassName("icon");
for (const window of taskbarButtons) {
    TaskbarAudio(window);
}

function TaskbarAudio(elmnt) {
    elmnt.onmouseover = HoverEvent;
    elmnt.onmouseout = HideTitle;

    function HoverEvent(e) {
        e = e || window.event;
        e.preventDefault();
        PlayRandomClick();
        ShowTitle();
    }

    function ShowTitle() {
        elmnt.getElementsByClassName("iconname")[0].style.visibility = "visible";
    }

    function HideTitle(e) {
        e = e || window.event;
        e.preventDefault();
        var title = elmnt.getElementsByClassName("iconname")[0];
        (function myLoop(i) {
            setTimeout(function () {
                title.style.opacity = (i * 15) / 100;
                if (i == 1) {
                    title.style.opacity = 1;
                    title.style.visibility = "hidden";
                }
                if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 1)
        })(6);
    }
}

var NotifPosition = 0;
var NotifHide = 0;
function TrayNotification(text){
    var notif = document.getElementById("trayNotification");
    notif.style.right = "-300px"
    NotifPosition = -300;
    NotifHide = 300;
    notif.innerHTML = text;
    AnimateNotif();
}

function AnimateNotif(){
    console.log("animate");
    var notif = document.getElementById("trayNotification");
    notif.style.right = NotifPosition + "px";
    notif.style.visibility = "visible";
    NotifPosition += 10;
    if (NotifPosition < 20) requestAnimationFrame(AnimateNotif);
    else HideNotif();
}

function HideNotif(){
    if (NotifHide > 0){
        NotifHide--;
        requestAnimationFrame(HideNotif);
    }
    else{
        var notif = document.getElementById("trayNotification"); 
        (function myLoop(i) {
            setTimeout(function () {
                notif.style.opacity = (i * 5) / 100;
                if (i == 1) {
                    notif.style.opacity = 1;
                    notif.style.visibility = "hidden";
                }
                if (--i) myLoop(i);
            }, 1)
        })(19);
    }
}