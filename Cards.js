let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
let deck = [];
for (let suit of suits) {
  for (let value of values) {
    deck.push(value + " of " + suit);
  }
}
function drawCard() {
  if (deck.length === 0) {
    document.getElementById("Deck").textContent =
      "Deck is Empty, Reshuffle to play again!";
    document.getElementById("count").textContent = "";
    document.getElementById("card-front").style.display = "none";
    return;
  }
  let randomIndex = Math.floor(Math.random() * deck.length);
  let drawnCard = deck.splice(randomIndex, 1)[0];
  document.getElementById("Deck").textContent = drawnCard;
  document.getElementById("count").textContent = "Cards left: " + deck.length;

  let imageName = drawnCard.split(" ").join("_") + ".png";
  let cardImg = document.getElementById("card-front");
  cardImg.src = "img/" + imageName;

  cardImg.style.display = "block";
}
function Reshuffle() {
  deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + " of " + suit);
    }
  }

  document.getElementById("Deck").textContent = "Deck Reshuffled";
  document.getElementById("count").textContent = "Cards left: " + deck.length;
  document.getElementById("card-front").style.display = "none";
}
