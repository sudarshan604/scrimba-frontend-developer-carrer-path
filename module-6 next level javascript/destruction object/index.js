// destructing object example

const player = {
  name: "sudarshan",
  age: 12,
  address: {
    city: "dhangadhi",
  },
};

let nam = player.name;
// let age = player.age;
let address = player.address.city;

// alert(nam + age + address);

//   same we can dowithout using player. so called destructing object

const {
  name,
  age,
  address: { city },
} = player;

// alert(city);

// destructring challenge

const student = {
  name1: "ram",
  age12: 24,
  project: {
    diceGame: "Two player dice game using javascript",
  },
};
const {
  name1,
  age12,
  project: { diceGame },
} = student;

// alert(name1);

// destrcuting array

let [firstName, LastName] = ["ram", "champ"];

// here firstName is reference to index0 like that
alert(firstName);

firstName = "shyam";
alert(firstName);
