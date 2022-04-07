class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  introduce() {
    console.log(this.name + "was born in" + this.country);
  }
}

let player = new Player("messi", "argentia");
player.introduce();

class TennisPLayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  display() {
    console.log(this.age + this.name + this.country);
  }
}

let pl = new TennisPLayer("mess", "argen", 34);

pl.display();
