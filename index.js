var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

console.log(randomNumber1);
console.log(randomNumber2);

// var randomDiceImage = "dice" + randomNumber1 + ".png";       // dicel.png - dice6.png
// var randomlmageSource = "images/" + randomDiceImage;         //images/dice1.png - images/dice6.png

/*
function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
let randomNumber1 = generateRandomNumber();
let randomNumber2 = generateRandomNumber();

console.log(randomNumber1, randomNumber2);
*/

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩Player 1 Won!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Won!🚩";
} else {
  heading.innerHTML = "It's a draw!";
}

document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
