var styleKey = "1999";
function SetStyle(style, reshuffle){
    styleKey = style;
    setCookie("style", styleKey, 60);
    var el = document.getElementById("themeUrl");
    el.href = "css/theme_"+ styleKey + ".css";
    if (reshuffle == true) OpenWindow("settingswindow", false);
}