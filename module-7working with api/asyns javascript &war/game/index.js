let deckId = "";
let check = false;
function getDeck() {
  check = !check;
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      deckId = data.deck_id;
    });
}

document.getElementById("deck-id").addEventListener("click", getDeck);

document.getElementById("draw").addEventListener("click", () => {
  if (check) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2 `)
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        let img = `<img src="${dat.cards[0].image}" />
        <img src="${dat.cards[1].image}" />
         `;
        document.getElementById("cards").innerHTML = img;
      });
  } else {
    console.log("deck id empty");
  }
});
