var audiologin = new Audio();
audiologin.src = "audio/warframe_pom2/login.ogg";
audiologin.volume = globalAudio * 0.2;

var audiomusic = new Audio();
audiomusic.src = "audio/warframe_pom2/bgm.ogg";
audiomusic.volume = globalAudio * 0.35;
audiomusic.loop = true;

function StartBGM() {
    audiologin.play();
    setTimeout(function () {
        audiomusic.play();
    }, 4300);
}

function Login(playBGM) {
    const url = new URL(window.location.toLocaleString()).searchParams;
    var urlParamWindow = url.get('window');
    var urlParamOpenDefaults = url.get("defaults");
    var urlParamVideo = url.get("video");
    var defaults = true;
    if (urlParamOpenDefaults == false || urlParamOpenDefaults == "false") defaults = false;
    if (defaults){
        OpenWindow('contactsocials', false);
        OpenWindow('information', false);
    }
    
    document.getElementById("iconTray").style.visibility = "visible";
    document.getElementById("toggleBGM").style.visibility = "visible";
    document.getElementById("settingsgear").style.visibility = "visible";
    document.getElementById("desktopcontainer").style.visibility = "visible";
    document.getElementById("login").style.visibility = "hidden";
    if (playBGM == true) StartBGM();
    else AdjustMusicIcon();

    
    if (urlParamWindow != null && urlParamWindow != ""){
        OpenWindow(urlParamWindow, false);
    }
    if (urlParamVideo != null && urlParamVideo != ""){
        OpenVideo(urlParamVideo);
    }
}

