
var crtEnabled = true;
const crtRule = 
`.overlay::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 4px, 3px 100%;
    pointer-events: none;
}`;
function ToggleCRT(){
    for (var i = 0, ii = document.styleSheets.length; i < ii; i++) {
        for (var k = 0, kk = document.styleSheets[i].cssRules.length; k < kk; k++) {
            if (crtEnabled){
                if (document.styleSheets[i].cssRules[k].selectorText === 'overlay::before' || document.styleSheets[i].cssRules[k].selectorText === '.overlay::before') {
                    document.styleSheets[i].deleteRule(k);
                    crtEnabled = false;
                    setCookie("crt", crtEnabled, 60);
                    return;
                }   
            }
            else{
                document.styleSheets[i].insertRule(crtRule);
                crtEnabled = true;
                setCookie("crt", crtEnabled, 60);
                return;
            }
        };
    };
}

var globalAudio = 0.3;
var slider = document.getElementById("volumeslider");
slider.oninput = function() {
    updateVolume();
} 

function updateVolume(){
    globalAudio = document.getElementById("volumeslider").value / 100;
    audiologin.volume = globalAudio * 0.2;
    audiomusic.volume = globalAudio * 0.35;
    setCookie("volume", globalAudio, 60);
}

window.addEventListener('load', reloadCookies, false);
function reloadCookies(){
    var volume = getCookie("volume");
    var crt = getCookie("crt");
    if (volume != ""){
        document.getElementById("volumeslider").value = volume * 100;
        updateVolume();
    }
    if (crt != "" && crt == "false"){
        ToggleCRT();
    }
}

// cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //console.log("set cookie " + cname + "=" + cvalue);
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
