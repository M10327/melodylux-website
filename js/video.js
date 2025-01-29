class Video {
    constructor(key, file, title) {
        this.key = key;
        this.file = file;
        this.title = title;
    }
}

const videos = [
    new Video('ccb1', 'ccb1_clear.mp4', `Melody's Contingency Contract Pyrolysis 620 Risk Clear`),
    new Video('ccb2', 'ccb2_clear.mp4', `Melody's Contingency Contract Underdawn 750 Risk Clear`),
    new Video('pinchout', 'pinch_out_clear.mp4', `Melody's Pinch Out 540 Risk Clear`)
];
var currentVideo = "";

function OpenVideo(key) {
    OpenWindow("videowindow")
    var video = null;
    for (vid in videos){
        if (videos[vid].key == key){
            video = videos[vid];
            currentVideo = videos[vid].key;
            break;
        }
    }
    var header = document.getElementById("videowindowheader");
    header.innerHTML = video.title;

    var videocontainer = document.getElementById('videoplayer');
    var videosource = document.getElementById('videoplayersrc');

    videocontainer.pause();
    videosource.setAttribute('src', "video/" + video.file);
    videocontainer.load();
    videocontainer.play();
}
