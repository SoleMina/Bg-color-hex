const hexNumbers = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector(".hexBtn");

const bodyBcg = document.querySelector("body");

const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
	let hexColor = "#";

	for(var i = 0; i<6; i++) {
		let randomNumber = Math.floor(Math.random() * hexNumbers.length);
		hexColor+=hexNumbers[randomNumber];
	}
	bodyBcg.style.backgroundColor = hexColor;
	hex.innerHTML = hexColor;
}