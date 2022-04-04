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
