var audiologin = new Audio();
audiologin.src = "audio/login.ogg";
audiologin.volume = globalAudio * 0.2;

var audiomusic = new Audio();
audiomusic.src = "audio/bgm.ogg";
audiomusic.volume = globalAudio * 0.35;
audiomusic.loop = true;

function StartBGM() {
    audiologin.play();
    setTimeout(function () {
        audiomusic.play();
    }, 4300);
}

function Login(playBGM) {
    OpenWindow('contactsocials', false);
    OpenWindow('information', false);
    document.getElementById("iconTray").style.visibility = "visible";
    document.getElementById("toggleBGM").style.visibility = "visible";
    document.getElementById("settingsgear").style.visibility = "visible";
    document.getElementById("desktopcontainer").style.visibility = "visible";
    document.getElementById("login").style.visibility = "hidden";
    if (playBGM == true) StartBGM();
    else AdjustMusicIcon();
}

