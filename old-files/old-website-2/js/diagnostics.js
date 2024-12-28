function RandomizeDiagDot() {
	el = document.getElementById("diagnostics-dot");
	var leftOffset = generateRandomInteger(8100, 8300);
	var topOffset = generateRandomInteger(3200,3600);
	el.style.left = leftOffset/100 + "%";
	el.style.top = topOffset/100 + "%";
	el.style.display = "block";
}

window.addEventListener('load', RandomizeDiagDot, false); 

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}