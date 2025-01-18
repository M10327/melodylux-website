
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
                    return;
                }   
            }
            else{
                document.styleSheets[i].insertRule(crtRule);
                crtEnabled = true;
                return;
            }
        };
    };
}

var globalAudio = 0.3;
var slider = document.getElementById("volumeslider");
slider.oninput = function() {
    globalAudio = this.value / 100;
    audiologin.volume = globalAudio * 0.2;
    audiomusic.volume = globalAudio * 0.35;
} 
