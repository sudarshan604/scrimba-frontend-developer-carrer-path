// let btn = document.getElementById("btn");

// btn.addEventListener("click", deckCard);

// function deckCard() {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

document.getElementById("btn").addEventListener("click", function () {
  console.log("hello");
});
// setTimeout(log, 2000);

// function log() {
//   console.log("hello");
// }

const people = [
  { name: "jack", hasPet: true, age: 17 },
  { name: "jill", hasPet: false, age: 20 },
  { name: "alice", hasPet: true, age: 18 },
  { name: "bob", hasPet: false, age: 16 },
];

let arr = people.filter((peo) => peo.hasPet);

// call back

let peopleArr = filterPeople(people, function (pers) {
  return pers.age >= 18;
});

function filterPeople(arr, callback) {
  let arrP = [];

  for (let item of arr) {
    if (callback(item)) {
      arrP.push(item);
    }
  }
  return arrP;
}

console.log(peopleArr);

const voter = [
  { name: "joe", email: "joe@gmail.com", voted: true },
  { name: "regan", email: "regan@gmail.com", voted: false },
  { name: "mae", email: "mae@gmail.com", voted: true },
];

const voterAr = voter.filter((v) => v.voted).map((em) => em.email);

console.log(voterAr);

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
  .then(function (res) {
    return "name";
  })
  .then(function (dta) {
    return dta;
  })
  .then(function (word) {
    console.log(word);
  });
