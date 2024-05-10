// Get the modal
var modal = document.getElementById("mem-box");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("mem-close")[0];

var btnBio = document.getElementById("memBio");
btnBio.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "Expanded Bio";
  document.getElementById('mem-text').innerHTML = "Names: Melody and Ashley" + 
  "<br><br>Pronouns: she/her and it/its" + 
  "<br><br>Even when referring to me by it/its please use feminine gendered terms. (for example: sister > sibling)" +
  "<br><br>Age: Over 21";
}

var btnInt = document.getElementById("memInt");
btnInt.onclick = function() {
  modal.style.display = "block";
  document.getElementById('mem-header').innerHTML = "Interests";
  document.getElementById('mem-text').innerHTML = "I enjoy coding. I primarily use C# but have some experience with java and python." + 
  "<br><br>Currently into Genshin, Arknights, and Warframe. Always looking for people to play/talk about Warframe with.";
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

span.onclick = function() {
  modal.style.display = "none";
}
