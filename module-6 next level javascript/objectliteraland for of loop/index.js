function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    contry: "united",
  };
  console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`);
}

addressMaker({ city: "austin", state: "Texas" });

// for of loop

const student = [
  { name: "john", city: "new york" },
  { name: "peter", city: "new york" },
];

for (obj of student) {
  console.log(obj.name + "lives in" + obj.city);
}

const shopingList = ["eggs", "milk", "butter"];

const shoppingBasket = ["potato", ...shopingList];

for (shop of shoppingBasket) {
  console.log(shop);
}

// arrow function

function hello() {}

// anonymous function
const lunchMenu = function () {
  return "";
};

// arrow function

let dinnerMenu = () => {
  return "hello ";
};

let dinnerMenu1 = (food) => ` i am going  to eat ${food}`;

// but for double argumrnt we need  parenthisis

let dinnerMenu2 = (food, drink) => ` i am going  to eat ${food} and ${drink}`;

// default parameter challenge

const grocceryShop = (drink = "something") => {
  return `i am going to buy${drink} from the grocerry shop`;
};

console.log(grocceryShop());
