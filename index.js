var randomNumberForDicee1 = Math.floor(Math.random() * 6) + 1;
var randomPositonForDicee1 = "./images/dice" + randomNumberForDicee1 + ".png";

if (randomNumberForDicee1 === 1) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}
if (randomNumberForDicee1 === 2) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}
if (randomNumberForDicee1 === 3) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}
if (randomNumberForDicee1 === 4) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}
if (randomNumberForDicee1 === 5) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}
if (randomNumberForDicee1 === 6) {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomPositonForDicee1);
}

var randomNumberForDicee2 = Math.floor(Math.random() * 6) + 1;
var randomPositonForDicee2 = "images/dice" + randomNumberForDicee2 + ".png";
if (randomNumberForDicee2 === 1) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomNumberForDicee2);
}
if (randomNumberForDicee2 === 2) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomPositonForDicee2);
}
if (randomNumberForDicee2 === 3) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomPositonForDicee2);
}
if (randomNumberForDicee2 === 4) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomPositonForDicee2);
}
if (randomNumberForDicee2 === 5) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomPositonForDicee2);
}
if (randomNumberForDicee2 === 6) {
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomPositonForDicee2);
}

if (randomNumberForDicee1 === randomNumberForDicee2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumberForDicee1 > randomNumberForDicee2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumberForDicee1 < randomNumberForDicee2) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
