var windows = document.getElementsByClassName("window");
for (const window of windows) {
    dragElement(window)
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.getElementsByClassName("headertext")[0].onmousedown = dragMouseDown;
    elmnt.getElementsByClassName("close")[0].onmousedown = closeWindow;
    elmnt.getElementsByClassName("close")[0].onmouseover = ButtonAudio;
    var shares = elmnt.getElementsByClassName("share");
    if (shares.length >= 1) elmnt.getElementsByClassName("share")[0].onmousedown = CopyShareUrl;
    if (shares.length >= 1) elmnt.getElementsByClassName("share")[0].onmouseover = ButtonAudio;
    elmnt.onmousedown = shuffleToTop;

    function ButtonAudio(e) {
        e = e || window.event;
        e.preventDefault();
        PlayRandomClick();
    }

    function shuffleToTop(e) {
        OpenWindow(elmnt.id, false);
    }

    function closeWindow(e) {
        e = e || window.event;
        e.preventDefault();
        var videos = document.getElementsByTagName("video");
        for (var i = 0, ii = videos.length; i < ii; i++) {
            if (videos[i] != null) {
                videos[i].pause();
            }
        };

        PlayRandomClose();
        (function myLoop(i) {
            setTimeout(function () {
                elmnt.style.opacity = (i * 5) / 100;
                if (i == 1) {
                    elmnt.style.opacity = 1;
                    elmnt.style.visibility = "hidden";
                }
                if (--i) myLoop(i);
            }, 1)
        })(19);



    }

    function CopyShareUrl(e) {
        e = e || window.event;
        e.preventDefault();
        var id = elmnt.id;
        if (id == "videowindow"){
            var copyText = "https://melodylux.com/?video=" + currentVideo + "&defaults=false";
            navigator.clipboard.writeText(copyText);
            TrayNotification("Copied video's share url to clipboard!");
            return;
        }
        var copyText = "https://melodylux.com/?window=" + id + "&defaults=false";
        navigator.clipboard.writeText(copyText);
        TrayNotification("Copied window's share url to clipboard!");
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        var height = document.body.scrollHeight - 100;
        var width = document.body.scrollWidth - elmnt.scrollWidth;
        // set the element's new position:
        var valTop = elmnt.offsetTop - pos2;
        if (valTop < 0) valTop = 0;
        if (valTop > height) valTop = height;
        elmnt.style.top = (valTop) + "px";
        var valLeft = elmnt.offsetLeft - pos1;
        if (valLeft < 0) valLeft = 0;
        if (valLeft > width) valLeft = width;
        elmnt.style.left = (valLeft) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function OpenWindow(key, playsound = true) {
    if(playsound) PlayRandomOpen();
    var windows = document.getElementsByClassName("window");
    var style = window.getComputedStyle(document.body);
    var active = style.getPropertyValue("--window_headerbg_active");
    var inactive = style.getPropertyValue("--window_headerbg_inactive");
    for (var i = 0, ii = windows.length; i < ii; i++) {
        if (windows[i].style.zIndex > 0) {
            windows[i].style.zIndex = windows[i].style.zIndex - 1;
            windows[i].getElementsByClassName("headerbox")[0].style.backgroundColor = inactive;
        }
        if (windows[i].id == key) {
            document.getElementById(key).style.visibility = "visible";
            document.getElementById(key).style.zIndex = "900";
            windows[i].getElementsByClassName("headerbox")[0].style.backgroundColor = active;
        }
    };
}

