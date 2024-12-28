var audiologin = new Audio();
audiologin.src = "audio/login.ogg";
audiologin.volume = 0.1;

var audiomusic = new Audio();
audiomusic.src = "audio/bgm.ogg";
audiomusic.volume = 0.2;
audiomusic.loop = true;

function StartBGM() {
    audiologin.play();
    setTimeout(function () {
        audiomusic.play();
    }, 4300);
}

function Login(playBGM) {
    OpenWindow('contactsocials');
    OpenWindow('information');
    document.getElementById("iconTray").style.visibility = "visible";
    document.getElementById("toggleBGM").style.visibility = "visible";
    document.getElementById("desktopcontainer").style.visibility = "visible";
    document.getElementById("login").style.visibility = "hidden";
    if (playBGM == true) StartBGM();
    else AdjustMusicIcon();
}

