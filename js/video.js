

function OpenVideo(videoTitle, displayTitle) {
    OpenWindow("videowindow")
    var header = document.getElementById("videowindowheader");
    header.innerHTML = displayTitle;

    var videocontainer = document.getElementById('videoplayer');
    var videosource = document.getElementById('videoplayersrc');

    videocontainer.pause();
    videosource.setAttribute('src', "video/" + videoTitle);
    videocontainer.load();
    videocontainer.play();
}