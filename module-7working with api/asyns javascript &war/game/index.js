let deckId = "";
let check = false;
let result = document.getElementById("result");
let remainCard = document.getElementById("remain-card");
let btnDraw = document.getElementById("draw");
let yScore = document.getElementById("score");
let CScore = document.getElementById("Cscore");
let computerScore = 0;
let yourscore = 0;

function getDeck() {
  check = !check;

  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      remainCard.innerText = `Remaining Card:${data.remaining}`;
    });
}

document.getElementById("deck-id").addEventListener("click", getDeck);

btnDraw.addEventListener("click", () => {
  if (check) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2 `)
      .then((res) => res.json())
      .then((dat) => {
        document.getElementById(
          "cards"
        ).children[1].innerHTML = `<img src="${dat.cards[0].image}" class=cards />`;
        document.getElementById(
          "cards"
        ).children[3].innerHTML = `<img src="${dat.cards[1].image}" class=cards />`;

        let card1 = {
          value: dat.cards[0].value,
        };
        let card2 = {
          value: dat.cards[1].value,
        };

        const message = winner(card1, card2);
        result.innerText = message;
        remainCard.innerText = `Remaining Card:${dat.remaining}`;
        if (dat.remaining === 0) {
          btnDraw.disabled = true;
          yScore.innerText = `your score ${yourscore}`;
          CScore.innerText = `computer Score ${computerScore}`;
          result.innerText = "";
        }
      });
  } else {
    console.log("deck id empty");
  }
});

function winner(card1, card2) {
  let cardOption = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ACE",
  ];

  let card1Index = cardOption.indexOf(card1.value);
  let card2Index = cardOption.indexOf(card2.value);
  if (card1Index > card2Index) {
    computerScore += 1;
    return "card 1 win";
  } else if (card1Index < card2Index) {
    yourscore += 1;
    return "card 2 win";
  } else {
    return "draw";
  }
}
