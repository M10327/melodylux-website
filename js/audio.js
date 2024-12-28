
buttonToggleBGM(document.getElementById("toggleBGM"));
function buttonToggleBGM(elmnt) {
    elmnt.onmousedown = toggle;

    function toggle(e) {
        e = e || window.event;
        e.preventDefault();
        if (audiomusic.paused) {
            audiomusic.play();
        }
        else {
            audiomusic.pause();
        }
        AdjustMusicIcon();
    }
}

function AdjustMusicIcon() {
    if (audiomusic.paused) {
        document.getElementById("toggleBGM").src = "images/volume_off.png";
    }
    else {
        document.getElementById("toggleBGM").src = "images/volume_on.png";
    }
}

function PlayRandomClick() {
    var audio = new Audio();
    audio.src = "audio/NinetyNineMessengerHover" + Math.round(Math.random() * 5) + ".ogg";
    audio.volume = 0.15;
    audio.play();
}