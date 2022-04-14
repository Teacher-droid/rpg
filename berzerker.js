import Character from "./character.js";

export default class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0) {
    super(hp, dmg, mana);
    this.heroName = "Draven";
  }

  rage = () => {
    this.rage = true;
    console.log("DAMN ! That's Rage ! Draven uses a special move !");      
    this.dmg += 1;
    this.hp -= 1;
    console.log(`Draven bulks up out of rage ! Damages are increased by 1, but health lowers by 1 hp. Now, the character has ${this.dmg} damage strength and ${this.hp} hp !`);
  }
}

//let newBerzerker = new Berzerker();
//console.log(newBerzerker);