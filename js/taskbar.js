

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
