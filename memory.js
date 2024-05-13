// Get the modal
var modal = document.getElementById("mem-box");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("mem-close")[0];

var btnBio = document.getElementById("memBio");
btnBio.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "About Me";
  document.getElementById('mem-text').innerHTML = "Names: Melody and Ashley" + 
  "<br><br>Pronouns: she/her and it/its" + 
  "<br><br>Even when referring to me by it/its please use feminine gendered terms. (for example: sister > sibling)" +
  "<br><br>Age: Over 21";
}

var btnInt = document.getElementById("memInt");
btnInt.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "Interests";
  document.getElementById('mem-text').innerHTML = "I enjoy coding. I primarily use C# but have some experience with java, python, and javascript." + 
  "<br><br>Currently into Genshin, Arknights, and Warframe. Always looking for people to play/talk about these with (especially Warframe)." +
  "<br><br>I also run an unturned server. I'm not super into the game itself anymore, but I enjoy making stuff for it. You can check it out <a href='https://www.silverportreborn.com/'>here.</a>";
}

var btnCre = document.getElementById("memCre");
btnCre.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "Credits and Tools Used";
  document.getElementById('mem-text').innerHTML = "<a href='https://css-tricks.com'>css tricks</a>" +
  "<br><a href='https://www.w3schools.com'>w3 schools</a>" +
  "<br><a href='https://transfonter.org/'>transfonter</a>" +
  "<br><a href='https://stackoverflow.com'>stackoverflow</a>" +
  "<br><a href='https://grid.layoutit.com/'>layoutit</a>" +
  "<br><a href='https://store.steampowered.com/app/1262350/SIGNALIS/'>signalis</a>";
}

var btnAbt = document.getElementById("memAbt");
btnAbt.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "About This Site";
  document.getElementById('mem-text').innerHTML = "This site was made almost entirely by hand (no website builders) as a hobby project." +
  "<br>I really like signalis, and when I saw a reddit post where a user made this ui their desktop background, I knew it would be perfect as a redesign for my website." +
  "<br>This is also my first time using javascript, so that was fun to learn." + 
  "<br>Currently the interactable parts are memories (this), the radio, and external links." + 
  "<br>Radio music is all from Signalis. This means its technically spoilers if you care about that.";
}

span.onclick = function() {
  modal.style.display = "none";
}
