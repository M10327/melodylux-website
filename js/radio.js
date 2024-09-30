var values = ["053.000", "107.000", "147.000", "192.000", "248.000"];
var barsIndex = [0, 5, 9, 14, 19];
var lineMargin = [-220, -105, -10, 105, 225];
var current = 1;
var playing = false;
const barsDefault =
[
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
	"<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■",
];
var bars = barsDefault;
const animationDelay = 4;
var animate = animationDelay;
var audio = new Audio();
var volume = 0.2;

function updateRadio() {
    var freq = values[current];
	var bar = barsIndex[current];
	var line = lineMargin[current];
	document.getElementById("radio-selectorline").style.marginLeft = line + "px";
	document.getElementById("frequency-number").innerHTML = freq;
	
	if (animate > 0)
		animate--;
	else{
		animate = animationDelay;
		if (playing) AnimateRadioBars();
	}
    document.getElementById('rad-bars').innerHTML = bars.join("");
	
	
    requestAnimationFrame(updateRadio);
}

function AnimateRadioBars(){
	var middle = barsIndex[current];
	for(var i = 0; i < bars.length; i++) {
		bars[i] = "<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■";
		if (i == middle - 2)
			bars[i] = "<font color='ffffff'>" + insertAtIndex(bars[i], "</font><font color='3f3f3f'>", GetRandomOffset(24)) + "</font>";
		if (i == middle - 1)
			bars[i] = "<font color='ffffff'>" + insertAtIndex(bars[i], "</font><font color='3f3f3f'>", GetRandomOffset(48)) + "</font>";
		if (i == middle)
			bars[i] = "<font color='ffffff'>" + insertAtIndex(bars[i], "</font><font color='3f3f3f'>", GetRandomOffset(80)) + "</font>";
		if (i == middle + 1)
			bars[i] = "<font color='ffffff'>" + insertAtIndex(bars[i], "</font><font color='3f3f3f'>", GetRandomOffset(48)) + "</font>";
		if (i == middle + 2)
			bars[i] = "<font color='ffffff'>" + insertAtIndex(bars[i], "</font><font color='3f3f3f'>", GetRandomOffset(24)) + "</font>";
	}
}

function GetRandomOffset(i){
	min = i - 2;
	max = i + 2;
	return Math.floor(Math.random() * (max - min) ) + min;
}

function insertAtIndex(str, substring, index) {
  return str.slice(0, index) + substring + str.slice(index);
}

function UpdateAudio(){
	if (playing){
		audio.src = "audio/" + current +".mp3";
		audio.play();
		audio.loop = true;
	}
	else
		audio.pause();
}

function ToggleRadioOff(){
	document.getElementById("frequency-number").style.color = "#3f3f3f";
	var tags = document.getElementsByClassName("tag-toggleable");
	for(var i = 0; i < tags.length; i++) {
		tags[i].style.color = "#3f3f3f";
		tags[i].style.borderColor = "#3f3f3f";
	}
	for(var i = 0; i < bars.length; i++) {
		bars[i] = "<br>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■";
	}
}

function ToggleRadioOn(){
	document.getElementById("frequency-number").style.color = "#cc3500";
	var tags = document.getElementsByClassName("tag-toggleable");
	for(var i = 0; i < tags.length; i++) {
		tags[i].style.color = "#cc3500";
		tags[i].style.borderColor = "#cc3500";
	}
}

window.addEventListener('load', RadioLoad, false); 
function RadioLoad() {
    updateRadio();
	ToggleRadioOff();
	audio.volume = volume;
	document.getElementById('volume').innerHTML = Math.round((volume * 100));
};

var btnLeft = document.getElementById("rad-button-freq-left");
btnLeft.onclick = function() {
	if (current > 0){
		current--;
		UpdateAudio();
	}
}

var btnRight = document.getElementById("rad-button-freq-right");
btnRight.onclick = function() {
	if (current < 4){
		current++;
		UpdateAudio();
	}
}

var btnPlay = document.getElementById("rad-button-play");
btnPlay.onclick = function() {
	playing = true;
	ToggleRadioOn();
	UpdateAudio();
}

var btnPause = document.getElementById("rad-button-pause");
btnPause.onclick = function() {
	playing = false;
	ToggleRadioOff();
	UpdateAudio();
}

var btnVolUp = document.getElementById("rad-button-volup");
btnVolUp.onclick = function() {
	if (volume < .95)
		volume += 0.05;
	audio.volume = volume;
	document.getElementById('volume').innerHTML = Math.round((volume * 100));
}

var btnVolDown = document.getElementById("rad-button-voldown");
btnVolDown.onclick = function() {
	if (volume > 0.1)
		volume -= 0.05;
	audio.volume = volume;
	document.getElementById('volume').innerHTML = Math.round((volume * 100));
}