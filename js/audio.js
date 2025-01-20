
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
    audio.src = "audio/warframe_pom2/NinetyNineMessengerHover" + Math.round(Math.random() * 5) + ".ogg";
    audio.volume = globalAudio * 0.3;
    audio.play();
}

function PlayRandomOpen() {
    var audio = new Audio();
    audio.src = "audio/warframe_pom2/NinetyNineMessengerWindowOpen" + Math.round(Math.random() * 1) + ".ogg";
    audio.volume = globalAudio * 0.3;
    audio.play();
}

function PlayRandomClose() {
    var audio = new Audio();
    audio.src = "audio/warframe_pom2/NinetyNineMessengerWindowClose" + Math.round(Math.random() * 1) + ".ogg";
    audio.volume = globalAudio * 0.3;
    audio.play();
}

function PlayAudio(sound, volume){
    var audio = new Audio();
    audio.src = "audio/" + sound;
    audio.volume = globalAudio * volume;
    audio.play();
}